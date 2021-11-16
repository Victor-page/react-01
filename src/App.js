import Profile from './components/SocialProfile/Profile';
import Statistics from './components/Statistics/Statistics';

import {
  username,
  tag,
  location,
  avatar,
  stats,
} from './components/SocialProfile/user.json';

import statisticsData from './components/Statistics/statisticsData.json';

const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <Statistics title="Upload stats" stats={statisticsData} />
      <Statistics stats={statisticsData} />
    </>
  );
};

export default App;
