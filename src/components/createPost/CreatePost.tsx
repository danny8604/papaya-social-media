import Button from "../ui/button/Button";
import Card from "../ui/card/Card";
import "./CreatePost.scss";

type CreatePostProps = {
  avatar: string;
  user: string;
};

const CreatePost = ({ avatar, user }: CreatePostProps) => {
  const btnClick = () => alert("test create");

  return (
    <Card>
      <div className="createPost">
        <img src={avatar} className="avatar" />
        <Button
          btnText={`What's on your mind? ${user}`}
          blackBtn
          small
          clickAction={btnClick}
        />
      </div>
    </Card>
  );
};

export default CreatePost;
