import { Heading } from "../components/Heading";
// import { SubHeading } from "../components/SubHeading";

const Signin = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="max-w-md bg-slate-200 rounded-xl p-8">
        <Heading label={"Sign in"} />
        {/* <SubHeading label={`Enter your information to create \n an account`} /> */}
      </div>
    </div>
  );
};

export default Signin;
