import "./Navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { themeToggle } from "../../redux/themeSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <div className={`navbar ${theme}`}>
      <div className="left">
        <Link to={"/"}>
          <span>PAPAYA</span>
        </Link>
      </div>
      <div className="right">
        <HomeOutlinedIcon />
        {theme === "" ? (
          <DarkModeOutlinedIcon onClick={() => dispatch(themeToggle())} />
        ) : (
          <WbSunnyOutlinedIcon onClick={() => dispatch(themeToggle())} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
