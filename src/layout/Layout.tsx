import { Outlet } from "react-router-dom";
import LeftBar from "../components/leftBar/LeftBar";
import Navbar from "../components/navbar/Navbar";
import RightBar from "../components/rightBar/RightBar";
import "./Layout.scss";

const DUMMY_USER = {
  avatar: "../assets/avatars/avatar-1.jpg",
  firstName: "Chang",
  lastName: "Danny",
  loaction: "Fake location",
  occupation: "Front-end engineer",
  email: "test@test.com",
  friends: [{ avatar: "avatar-1.jpg" }],
  stories: [],
  posts: [],
  favoritePosts: [],
};

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <LeftBar />
      <Outlet />
      <RightBar friends={DUMMY_USER.friends} />
    </div>
  );
};

export default Layout;
