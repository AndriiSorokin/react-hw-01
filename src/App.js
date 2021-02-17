import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './components/Data/profile.json';
import statistic from './components/Data/statistics.json';
import friends from './components/Data/friends.json';
import transaction from './components/Data/transaction.json';
import 'modern-normalize/modern-normalize.css';

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
        <FriendList friends={friends} />
        <TransactionHistory items={transaction} />
      </>
    </div>
  );
};
export default App;
