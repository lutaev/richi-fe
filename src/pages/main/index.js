import { useState } from 'react';

import './main.scss';

const MainPage = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="page main-page">
      <h2>Welcome to our dashboard!</h2>
      {users.length ? users.map(user => (
        <div>Test</div>
      )) : (
        <div className="no-users">There is no users</div>
      )}
    </div>
  )
};

export default MainPage;