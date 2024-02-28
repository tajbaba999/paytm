import Button from "./Button";

export default function User() {
  return (
    <div>
      <div>
        <div className="flex font-bold mt-4">Users</div>
        <input
          className="border-black rounded-md border-2 w-full mt-2 px-1 h-10"
          placeholder="Search"
        ></input>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="mt-3 ml-5">
            <img
              className="w-12 h-12 rounded-full"
              src="https://img.freepik.com/free-vector/portrait-boy-with-brown-hair-brown-eyes_1308-146018.jpg?size=626&ext=jpg"
              alt="Rounded avatar"
            />
          </div>
          <div className="mt-5 ml-2 font-medium">Taj Baba</div>
        </div>
        <div className="mt-4">
          <Button name={"Sign in"} />
        </div>
      </div>
    </div>
  );
}
