import { LuMessagesSquare } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [preferences, setPreferences] = useState<boolean>(false);

  return (
    <div className="relative h-[70px] px-10 py-2 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <LuMessagesSquare className="text-slate-700 size-8 shadow-3xl" />

        <h2 className="font-bold text-[white]">Chit-Chat</h2>
      </div>

      <img
        src="/image.png"
        alt=""
        className="w-[40px] rounded-full"
        onClick={() => {
          setPreferences(!preferences);
        }}
      />
      {preferences && (
        <div className="absolute bg-[#fbf9f9] text-slate-700 px-3 py-2 rounded-lg top-[60px] right-10 shadow-lg cursor-pointer">
          <li className="flex items-center py-1 gap-3 text-[18px] font-semibold hover:bg-gray-300 px-2 rounded-md my-2">
            <div className="bg-blue-700 rounded-full p-2 text-white">
              <IoSettings />
            </div>
            <p>Account Setting</p>
          </li>
          <li className="flex items-center py-1 gap-3 text-[18px] font-semibold hover:bg-gray-300 px-2 rounded-md my-2">
            <div className="bg-pink-700 rounded-full p-2 text-white">
              <IoIosNotifications />
            </div>
            <p>Notification</p>
          </li>
          <li className="flex items-center py-1 gap-3 text-[18px] font-semibold hover:bg-gray-300 px-2 rounded-md my-2">
            <div className="bg-zinc-700 rounded-full p-2 text-white">
              <IoMdLogOut />
            </div>
            <p>Log Out</p>
          </li>
        </div>
      )}
    </div>
  );
};

export default Header;
