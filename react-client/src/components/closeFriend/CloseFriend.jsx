import './closeFriend.css';

const CloseFriend = ({ friend }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="leftbar-friend">
      <img
        className="leftbar-friend-img"
        src={PF + friend.profilePicture}
        alt=""
      />
      <span className="leftbar-friend-name">{friend.username}</span>
    </li>
  );
};

export default CloseFriend;
