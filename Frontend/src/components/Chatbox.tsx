import { CiSearch } from "react-icons/ci";
import { RiAttachmentLine } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";
import { useContext } from "react";
import { Profile } from "../contexts/ProfileContext";

const Chatbox = () => {
  const { viewProfile, setViewProfile } = useContext(Profile)!;

  const openProfile = () => {
    setViewProfile(!viewProfile);
  };

  return (
    <div className="bg-transparent">
      <div className="flex justify-between">
        <div className="flex items-center py-3 gap-3">
          <img
            src="image.png"
            alt=""
            className="w-[45px] rounded-full"
            onClick={openProfile}
          />
          <h3 className="font-bold text-slate-700">UserName</h3>
        </div>

        <button className=" w-[40px] text-[30px] text-sky-600">
          <CiSearch />
        </button>
      </div>
      <hr className="border-slate-700 border-[0.5px]" />
      <div className="bg-red-400 ">Chatbox</div>
      <div className="fixed bottom-0 w-[75vw] flex py-2 gap-3 items-center">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-[80%] bg-gray-200 placeholder:text-gray-500 text-slate-700 rounded-md px-4 py-1 focus:outline-none"
        />
        <div className="flex text-[20px] flex-grow gap-5 items-center text-red-600">
          <RiAttachmentLine />
          <BsFillSendFill />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
