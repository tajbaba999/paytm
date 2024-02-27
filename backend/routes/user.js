const express = require("express");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const User = require("../db");
const JWT_SECRET = require("../config");

const signupSchema = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  password: zod.string(),
  lastName: zod.string(),
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  // console.log(body);

  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      message: "Invalid input format",
    });
  }

  const existingUser = await User.findOne({
    username: body.username,
  });

  if (existingUser) {
    return res.json({
      message: "Username already exists",
    });
  }

  try {
    const dbUser = await User.create(body);
    console.log(JWT_SECRET);

    const token = jwt.sign(
      {
        userId: dbUser._id,
      },
      JWT_SECRET
    );

    // Return success response with the generated token
    return res.json({
      message: "User created successfully",
      token: token,
    });
  } catch (error) {
    // If an error occurs during user creation, return an error response
    console.error("Error creating user:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
