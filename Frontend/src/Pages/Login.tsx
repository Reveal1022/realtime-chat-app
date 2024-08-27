import { TiUser } from "react-icons/ti";
import { IoIosPerson } from "react-icons/io";
import { FiKey } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (err) {
      console.log("error occured");
    }
  };

  return (
    <div className="flex items-center justify-center bg-[url('background.png')] bg-cover bg-center h-screen">
      <div className="relative bg-[#ffffff42] rounded-2xl p-5 px-10 text-slate-700 shadow-lg">
        <div className="absolute bg-[#00000056] text-[80px] text-white top-[-40px] left-1/2 transform -translate-x-1/2 rounded-full">
          <IoIosPerson className="text" />
        </div>
        <h3 className="font-extralight text-center text-white text-[23px] mt-10">
          LOGIN
        </h3>

        <div className="bg-white flex items-center my-4 w-[350px] ">
          <TiUser className="text-sky-600 size-4 mx-2" />
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
            type="text"
            placeholder="Password"
            className="bg-transparent focus:outline-none placeholder:text-sky-500 placeholder:text-[13px] py-[5px] pl-1 w-full"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center my-3">
          <input type="checkbox" className="focus:outline-none mx-3" />
          <label className="font-thin text-sky-500 text-[14px]">
            Remember Me
          </label>
        </div>
        <div className="flex justify-center">
          <button
            className="text-white bg-[#0000003f] w-[160px] py-[6px] rounded-3xl font-light text-[15px]"
            onClick={handleLogin}
          >
            LOGIN
          </button>
        </div>

        <div className=" text-[14px] my-2 font-extralight flex justify-between text-white">
          <span className="hover:cursor-pointer hover:text-slate-500">
            Forgot Password ?
          </span>
          <span
            className="hover:cursor-pointer hover:text-slate-500"
            onClick={() => {
              navigate("signUp");
            }}
          >
            New User ?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
