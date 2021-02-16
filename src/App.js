import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import user from './components/Data/Profile.json';
import statistic from './components/Data/Statistics.json';
import friends from './components/Data/Friends.json';

const App = () => {
  return (
    <div className="App">
      <>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload statistic" stats={statistic} />
        <FriendList friends={friends} />,
      </>
    </div>
  );
};
export default App;
