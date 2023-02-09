import Card from "../ui/card/Card";
import SideBar from "../ui/sideBar/SideBar";
import "./RightBar.scss";

const RightBar = () => {
  return (
    <SideBar>
      <Card>
        <div className="rightBar">Right Bar</div>
      </Card>
    </SideBar>
  );
};

export default RightBar;
