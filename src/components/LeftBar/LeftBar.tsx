import SideBar from "../ui/sideBar/SideBar";
import "./LeftBar.scss";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import avatar from "../../assets/avatars/avatar-1.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventNoteIcon from "@mui/icons-material/EventNote";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link } from "react-router-dom";
const LeftBar = () => {
  return (
    <SideBar>
      <div className="leftBar">
        <div className="linkContainer">
          <Link to="/">
            <div className="iconLink avatar">
              <img src={avatar} />
              <p>user</p>
            </div>
          </Link>
          <Link to="/friends">
            <div className="iconLink">
              <PeopleAltIcon />
              <p>Friends</p>
            </div>
          </Link>
          <Link to="/groups">
            <div className="iconLink">
              <GroupsIcon />
              <p>Groups</p>
            </div>
          </Link>
          <Link to="/watch">
            <div className="iconLink">
              <OndemandVideoIcon />
              <p>Watch</p>
            </div>
          </Link>
          <Link to="/events">
            <div className="iconLink">
              <EventNoteIcon />
              <p>Events</p>
            </div>
          </Link>
          <Link to="/recent">
            <div className="iconLink">
              <AccessTimeIcon />
              <p>Most Recent</p>
            </div>
          </Link>
        </div>
        <div className="shortcuts">
          <div>
            <h4>Your shortcuts</h4>
          </div>
          <div className="iconLink">
            <AccessTimeIcon />
            <p>Most Recent</p>
          </div>
        </div>
      </div>
    </SideBar>
  );
};

export default LeftBar;
