import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from "./Pages/Login.tsx";
import SignUp from "./Pages/SignUp.tsx";
import UserDetails from "./components/UserDetails.tsx";
import Chatbox from "./components/Chatbox.tsx";
import Layout from "./Pages/Layout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<SignUp />} />
      <Layout>
        <Route path="home" element={<></>}>
          <Route path="user" element={<Chatbox />} />
          <Route path="userProfile" element={<UserDetails />} />
        </Route>
      </Layout>
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
