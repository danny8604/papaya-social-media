import "./Friend.scss";
import test from "../../assets/avatars/avatar-1.jpg";

type FriendProps = {};

const Friend = ({}) => {
  return (
    <div className="friend">
      <img src={test} className="avatar" />
      <p>User</p>
    </div>
  );
};

export default Friend;
