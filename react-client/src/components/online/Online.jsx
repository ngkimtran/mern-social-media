import './online.css';

const Online = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbar-friend">
      <div className="rightbar-profile-img-container">
        <img
          src={PF + user.profilePicture}
          alt=""
          className="rightbar-profile-img"
        />
        <span className="rightbar-active-status"></span>
      </div>
      <span className="rightbar-username">{user.username}</span>
    </li>
  );
};

export default Online;
