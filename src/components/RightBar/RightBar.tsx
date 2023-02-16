import testImage from "../../assets/image/login-4.jpg";
import SideBar from "../ui/sideBar/SideBar";
import "./RightBar.scss";
import ContentWrapper from "../ui/contentWrapper/ContentWrapper";
import Friend from "../friend/Friend";
import Sponsored from "../sponsored/Sponsored";

type RightBarProps = {
  friends: any[];
};

const RightBar = ({ friends }: RightBarProps) => {
  return (
    <SideBar>
      <div className="rightBar">
        <ContentWrapper title="Sponsored" content={<Sponsored />} />
        <ContentWrapper title="Contacts" content={<Friend />} />
      </div>
    </SideBar>
  );
};

export default RightBar;
