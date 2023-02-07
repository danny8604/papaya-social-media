import "./Navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { themeToggle } from "../../redux/themeSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <div className={`navbar ${theme}`}>
      <HomeOutlinedIcon />
      {theme === "" ? (
        <DarkModeOutlinedIcon onClick={() => dispatch(themeToggle())} />
      ) : (
        <WbSunnyOutlinedIcon onClick={() => dispatch(themeToggle())} />
      )}
    </div>
  );
};

export default Navbar;
