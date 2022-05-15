import './following.css';

const Following = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="rightbar-following">
      <img
        src={PF + user.profilePicture}
        alt=""
        className="rightbar-following-img"
      />
      <span className="rightbar-following-name">{user.username}</span>
    </div>
  );
};

export default Following;
