import { CiSearch } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[90%] my-2">
        <h2 className="text-start font-extrabold text-white text-[22px]">
          Chats
        </h2>
      </div>

      <div className="flex items-center rounded-md w-[90%] p-1 bg-[#3433338c]">
        <button className="text-gray-400 text-[25px]">
          <CiSearch />
        </button>
        <input
          type="text"
          placeholder="Search.."
          className="w-full bg-transparent focus:outline-none pl-2 py-1"
        />
      </div>

      <div className=" w-[90%] ">
        <div className=" h-[100px] my-4">Online users</div>

        <div className=" h-full">User List</div>
      </div>
    </div>
  );
};

export default Sidebar;
