import React from 'react';
import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
    <div className={style.profile}>
      <div>
        <img src={avatar} alt="Аватар пользователя" className="avatar" />
        <p className={style.name}>{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className={style.stats}>
        <li>
          <span>Followers: </span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views: </span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes: </span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propsType = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
