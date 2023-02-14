import "./Story.scss";

type StoryProps = {
  avatar: string;
  stroyImage: string;
  user: string;
};

const Story = ({ avatar, stroyImage, user }: StoryProps) => {
  return (
    <div className="story">
      <img src={avatar} className="avatar" />
      <img src={stroyImage} className="stroyImage" />
      <p>{user}</p>
    </div>
  );
};

export default Story;
