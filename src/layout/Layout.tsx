import { Outlet } from "react-router-dom";
import LeftBar from "../components/LeftBar/LeftBar";
import Navbar from "../components/Navbar/Navbar";
import RightBar from "../components/RightBar/RightBar";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <LeftBar />
      <Outlet />
      <RightBar />
    </div>
  );
};

export default Layout;
