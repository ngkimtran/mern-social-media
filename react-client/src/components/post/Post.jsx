import { useState, useEffect } from 'react';
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId._id}`);
      setUser(res.data);
    };

    fetchUser();
  }, [post.userId]);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <Link
              to={`/profile/${user.username}`}
              style={{ textDecoration: 'none' }}
            >
              <img
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : `${PF}person/noAvatar.png`
                }
                alt=""
                className="post-profile-img"
              />
            </Link>
            <span className="post-profile-name">{user.username}</span>
            <span className="post-date">{format(post.createdAt)}</span>
          </div>
          <div className="post-top-right">
            <MoreVertIcon />
          </div>
        </div>

        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img className="post-img" src={PF + post.img} alt="" />
        </div>

        <div className="post-bottom">
          <div className="post-bottom-left">
            <img
              className="like-icon"
              src={`${PF}like.png`}
              onClick={handleLike}
              alt=""
            />
            <img
              className="like-icon"
              src={`${PF}heart.png`}
              onClick={handleLike}
              alt=""
            />
            <span className="post-like-counter">{like} people like it</span>
          </div>
          <div className="post-bottom--right">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
