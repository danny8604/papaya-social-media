import "./Navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { themeToggle } from "../../redux/themeSlice";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import avatar from "../../assets/avatars/avatar-1.jpg";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <div className={`navbar ${theme}`}>
      <div className="left">
        <Link to={"/"}>
          <span>PAPAYA</span>
        </Link>
        <div className="search">
          <SearchIcon />
          <input type="text" id="search" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        {theme === "" ? (
          <DarkModeOutlinedIcon onClick={() => dispatch(themeToggle())} />
        ) : (
          <WbSunnyOutlinedIcon onClick={() => dispatch(themeToggle())} />
        )}
        <HomeOutlinedIcon />
        <ChatBubbleOutlineIcon />
        <NotificationsNoneIcon />
        <img src={avatar} className="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
