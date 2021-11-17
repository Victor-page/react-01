import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';

import {
  username,
  tag,
  location,
  avatar,
  stats,
} from 'components/Profile/user.json';
import statisticsData from 'components/Statistics/statisticsData.json';
import friends from 'components/FriendList/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};

export default App;
