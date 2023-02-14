import Card from "../card/Card";
import "./Pots.scss";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplyIcon from "@mui/icons-material/Reply";

type PostProps = {
  avatar: string;
  user: string;
  postImage: string;
};

const Post = ({ avatar, user, postImage }: PostProps) => {
  return (
    <Card>
      <div className="post flex-column">
        <div className="postUser">
          <div className="left">
            <img src={avatar} />
            <p>{user}</p>
            <p>20h</p>
          </div>
          <button>
            <ClearIcon />
          </button>
        </div>
        <div className="postContent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vel,
            saepe vitae dignissimos voluptatum fugiat illo quam, nostrum ducimus
            excepturi quisquam provident, cumque eius. Eum in sapiente ab
            voluptatibus vero?
          </p>
        </div>
        <div className="postImage">
          <img src={postImage} />
        </div>
        <div className="postInfor flex-spaceBetween ">
          <div className="left">
            <button>
              <FavoriteIcon />
              Like 20
            </button>
          </div>
          <div className="right">
            <button>102 Comments</button>
            <button>20 Shares</button>
          </div>
        </div>
        <div className="postBtn flex-spaceAround">
          <button>
            <FavoriteBorderIcon />
            Like
          </button>
          <button>
            <ChatBubbleOutlineIcon />
            Comment
          </button>
          <button>
            <ReplyIcon />
            Share
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Post;
