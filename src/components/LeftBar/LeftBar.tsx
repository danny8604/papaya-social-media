import SideBar from "../ui/sideBar/SideBar";
import "./LeftBar.scss";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
const LeftBar = () => {
  return (
    <SideBar>
      <div className="leftBar">
        <div className="iconLink">
          <PeopleAltIcon />
          <p>Friends</p>
        </div>
        <div className="iconLink">
          <PeopleAltIcon />
          <p>Friends</p>
        </div>
      </div>
    </SideBar>
  );
};

export default LeftBar;
