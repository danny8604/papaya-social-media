import Card from "../ui/card/Card";
import testImage from "../../assets/image/login-4.jpg";
import SideBar from "../ui/sideBar/SideBar";
import "./RightBar.scss";

const RightBar = () => {
  return (
    <SideBar>
      <div className="rightBar">
        <div className="contentWrapper">
          <Card>
            <div className="content">
              <h4>Test Title</h4>
              <img src={testImage} />
            </div>
          </Card>
        </div>
        <div className="contentWrapper">
          <Card>
            <div className="content">
              <h4>Test Title</h4>
              <img src={testImage} />
            </div>
          </Card>
        </div>
        <div className="contentWrapper">
          <Card>
            <div className="content">
              <h4>Test Title</h4>
              <img src={testImage} />
            </div>
          </Card>
        </div>
        <div className="contentWrapper">
          <Card>
            <div className="content">
              <h4>Test Title</h4>
              <img src={testImage} />
            </div>
          </Card>
        </div>
      </div>
    </SideBar>
  );
};

export default RightBar;
