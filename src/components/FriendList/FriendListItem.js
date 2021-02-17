import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span className={style.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar:
    'https://cdn0.iconfinder.com/data/icons/ui-essential-solid-1/25/Bad_emoji_emoticon_sad_face_interface_avatar-512.png',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
