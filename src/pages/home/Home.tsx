import CreatePost from "../../components/createPost/CreatePost";
import Stories from "../../components/Stories/Stories";
import testAvatar from "../../assets/avatars/avatar-1.jpg";
import testImage from "../../assets/image/login-2.jpg";

import "./Home.scss";
import Post from "../../components/ui/post/Post";

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <CreatePost avatar={testAvatar} user="User" />
      <Post avatar={testAvatar} user="User" postImage={testImage} />
    </div>
  );
};

export default Home;
