import Card from "../card/Card";
import Story from "../../story/Story";
import testImage from "../../../assets/image/login-2.jpg";
import testAvatar from "../../../assets/avatars/avatar-1.jpg";
import "./Stories.scss";

const Stories = () => {
  return (
    <Card>
      <div className="stories">
        <Story
          avatar={testAvatar}
          stroyImage={testImage}
          user={"PAPAYA USER"}
        />
        <Story
          avatar={testAvatar}
          stroyImage={testImage}
          user={"PAPAYA USER"}
        />
        <Story
          avatar={testAvatar}
          stroyImage={testImage}
          user={"PAPAYA USER"}
        />
        <Story
          avatar={testAvatar}
          stroyImage={testImage}
          user={"PAPAYA USER"}
        />
        <Story
          avatar={testAvatar}
          stroyImage={testImage}
          user={"PAPAYA USER"}
        />
        <Story
          avatar={testAvatar}
          stroyImage={testImage}
          user={"PAPAYA USER"}
        />
        <Story
          avatar={testAvatar}
          stroyImage={testImage}
          user={"PAPAYA USER"}
        />
        <Story
          avatar={testAvatar}
          stroyImage={testImage}
          user={"PAPAYA USER"}
        />
      </div>
    </Card>
  );
};

export default Stories;
