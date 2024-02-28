import Button from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
// import { SubHeading } from "../components/SubHeading";
import { useState } from "react";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-96 bg-slate-200 rounded-xl p-8">
        <Heading label={"Sign in"} />
        {/* <SubHeading label={`Enter your information to create \n an account`} />
         */}
        <InputBox
          type="text"
          label={"Email :"}
          placeholder={"john@example.com"}
          onChange={(e) => {
            // console.log(e.target.value);
            setUsername(e.target.value);
          }}
          value={username}
        />

        <InputBox
          type="text"
          label={"Password :"}
          placeholder={"1234567"}
          onChange={(e) => {
            // console.log(e.target.value);
            setPassword(e.target.value);
          }}
          value={password}
        />
        <div className="py-7">
          <Button name={"Sign in"} />
        </div>
      </div>
    </div>
  );
};

export default Signin;
