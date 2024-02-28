// import React from "react";
import { Heading } from "../components/Heading";
// import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import Button from "../components/Button";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className=" max-w-md bg-slate-200 rounded-xl p-8">
        <Heading label={"Sign up"} />
        {/* <SubHeading label={`Enter your information to create \n an account`} /> */}
        <div className="w-90 mx-auto flex flex-col justify-center items-center">
          <InputBox
            type="text"
            label={"First Name :"}
            placeholder={"Jhon"}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
          />
          <InputBox
            type="text"
            label={"Last Name :"}
            placeholder={"Last Name"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
          />
          <InputBox
            type="text"
            label={"Email :"}
            placeholder={"Email"}
            onChange={(e) => {
              // console.log(e.target.value);
              setUsername(e.target.value);
            }}
            value={username}
          />
          <InputBox
            type="password"
            label={"Password :"}
            placeholder={"Password"}
            onChange={(e) => {
              // console.log(e);
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <div className="pt-3 pb-3">
          <Button name={"Submit"} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
