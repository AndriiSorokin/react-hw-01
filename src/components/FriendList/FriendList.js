import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export default FriendList;
