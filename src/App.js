import React from 'react'
import Profile from './components/Profile/Profile'
import user from './components/Data/Profile.json'
import statistic from './components/Data/Statistics.json'
import Statistics from './components/Statistics/Statistics'


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
         <Statistics title='Upload statistic' stats={statistic}/>
       </>
    </div>
  );
}
export default App;
