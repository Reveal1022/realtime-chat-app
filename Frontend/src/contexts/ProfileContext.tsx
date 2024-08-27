import { createContext, useState, ReactNode } from "react";

interface ProfileContextProps {
  viewProfile: boolean;
  setViewProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile = createContext<ProfileContextProps>({
  viewProfile: false,
  setViewProfile: () => {},
});

const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [viewProfile, setViewProfile] = useState<boolean>(false);

  return (
    <Profile.Provider value={{ viewProfile, setViewProfile }}>
      {children}
    </Profile.Provider>
  );
};

export { Profile, ProfileProvider };
