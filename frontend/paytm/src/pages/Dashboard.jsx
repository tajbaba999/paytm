import Appbar from "../components/Appbar"; // Remove curly braces
import Balance from "../components/Balance"; // Remove curly braces
import User from "../components/User";

export const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <Balance />
      <User />
    </div>
  );
};
