import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import UserProfile from "../components/UserProfile";
import { useContext } from "react";
import { Profile } from "../contexts/ProfileContext";
// import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { viewProfile } = useContext(Profile)!;

  return (
    <div className="bg-cover bg-center h-screen text-slate-700">
      <div className="min-h-screen flex flex-col">
        <div className="fixed w-full top-0 h-[70px] border-b-2 border-slate-600">
          <Header />
        </div>
        <div className="flex-grow flex mt-[70px] h-full">
          <div className="fixed w-[25vw] h-full top-[70px] border-r-[1px] border-gray-700">
            <Sidebar />
          </div>
          <div className="ml-[25vw] w-[75vw] flex-grow ">
            <div
              className={`fixed top-0 transition-all duration-300 ${
                viewProfile ? "right-0" : "right-[-250px]"
              } my-10`}
            >
              <UserProfile />
            </div>
            <div>
              {children}
              {/* <Outlet /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
