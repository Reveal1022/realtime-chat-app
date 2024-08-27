import { TiUser } from "react-icons/ti";
import { IoIosPerson } from "react-icons/io";
import { FiKey } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [mismatch, setMismatch] = useState<boolean>(false);
  const [errmsg, setErrmsg] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (rePassword != password) {
      setMismatch(true);
    }
  }, [rePassword]);

  const handleRegister = async () => {
    if (rePassword != password) {
      setMismatch(true);
      setErrmsg("Passwords do not match !");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        username,
        email,
        password,
      });

      navigate("/login");

      console.log(response.data.message);
    } catch (error) {
      console.log("Error Occured", error);
    }
  };

  return (
    <div className="flex items-center justify-center')] bg-cover bg-center h-screen">
      <div className="relative bg-[#ffffff42] rounded-2xl p-5 px-10 text-slate-700 shadow-lg">
        <div className="absolute bg-[#00000056] text-[80px] text-white top-[-40px] left-1/2 transform -translate-x-1/2 rounded-full">
          <IoIosPerson className="text" />
        </div>
        <h3 className="font-extralight text-center text-white text-[23px] mt-10">
          SIGN UP
        </h3>

        <div className="bg-white flex items-center my-4 w-[350px] ">
          <TiUser className="text-sky-600 size-4 mx-2" />
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent focus:outline-none placeholder:text-sky-500 placeholder:text-[13px] py-[5px] pl-1 w-full"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="bg-white flex items-center my-4 w-[350px] ">
          <MdEmail className="text-sky-600 size-4 mx-2" />
          <input
            type="text"
            placeholder="Email"
            className="bg-transparent focus:outline-none placeholder:text-sky-500 placeholder:text-[13px] py-[5px] pl-1 w-full"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="bg-white flex items-center my-4 w-[350px]">
          <FiKey className="text-sky-600 size-4 mx-2" />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent focus:outline-none placeholder:text-sky-500 placeholder:text-[13px] w-full py-[5px] pl-1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="bg-white flex items-center my-4 w-[350px]">
          <FiKey className="text-sky-600 size-4 mx-2" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-transparent focus:outline-none placeholder:text-sky-500 placeholder:text-[13px] w-full py-[5px] pl-1"
            onChange={(e) => {
              setRePassword(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          {mismatch ? (
            <div className="text-gray-500 text-[14px]">{errmsg}</div>
          ) : null}

          <button
            className="text-white bg-[#0000003f] w-[160px] py-[6px] rounded-3xl  font-light text-[15px]"
            onClick={handleRegister}
          >
            CREATE ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
