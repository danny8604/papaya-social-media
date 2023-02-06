import Navbar from "../components/Navbar/Navbar";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className={`theme-${true ? "dark" : "light"}`}>
      <Navbar />
    </div>
  );
};

export default Layout;
