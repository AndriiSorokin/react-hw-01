import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  friend: PropTypes.array,
};

export default FriendList;
