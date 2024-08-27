import UserProfile from "./UserProfile";
import { useContext } from "react";
import { Profile } from "../contexts/ProfileContext";

const Hero = () => {
  const { viewProfile } = useContext(Profile)!;

  return (
    <div className="px-10 w-[75vw]">
      <div
        className={`fixed top-0 transition-all duration-300 ${
          viewProfile ? "right-0" : "right-[-250px]"
        } my-10`}
      >
        <UserProfile />
      </div>
    </div>
  );
};

export default Hero;
