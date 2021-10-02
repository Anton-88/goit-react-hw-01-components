import React from 'react';
import { UserProfile } from './components/SocialNetworkProfile/User'
import user from './components/database/user.json'
import { Statistics } from './components/Statistics/Statistics'
import statData from './components/database/statistical-data.json'
import { FriendList } from './components/FriendList/FriendList'
import friends from './components/database/friends.json'
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory'
import transactions from './components/database/transactions.json'


function App() {
  return (
    <div>
      <UserProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={statData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </div>
  );
}

export default App;
