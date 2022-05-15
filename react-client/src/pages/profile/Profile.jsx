import { useEffect, useState } from 'react';
import './profile.css';
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/topbar/Topbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };

    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-img">
              <img
                src={
                  user.coverPicture
                    ? user.coverPicture
                    : `${PF}person/noCover.png`
                }
                alt=""
                className="profile-img-cover"
              />
              <img
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : `${PF}person/noAvatar.png`
                }
                alt=""
                className="profile-img-user"
              />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">{user.username}</h4>
              <span className="profile-info-desc">{user.desc}</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
