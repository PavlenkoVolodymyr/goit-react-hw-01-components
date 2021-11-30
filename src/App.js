import friends from './data/friends.json';
import user from './data/user.json';
import data from './data/data.json';
import transactions from './data/transactions.json';

import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friendlist={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
