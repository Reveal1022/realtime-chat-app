// import UserProfile from "./components/UserProfile";

import { ProfileProvider } from "./contexts/ProfileContext";

function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[url('/background.png')] bg-cover bg-center h-screen text-slate-700">
      <ProfileProvider>{children}</ProfileProvider>
    </div>
  );
}

export default App;
