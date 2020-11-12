import { useState, useEffect } from 'react';

import { list } from 'api/user';
import withAuth from 'hocs/withAuth';

import './main.scss';

const UserListItem = ({ user }) => (
  <li>
    <div className="user__phone-number">{user.phoneNumber}</div>
    <div className="user__confirmed">{user.confirmed ? 'Yes' : 'No'}</div>
  </li>
)

const MainPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchList() {
      const result = await list();
      setUsers(result);
    }
    fetchList();
  }, []);

  return (
    <div className="page main-page">
      <h2>Welcome to our dashboard! Here is a list of users:</h2>
      <br/>
      {users.length ? (
        <ul className="user__list">
          <li>
            <div className="user__phone-number">
              <strong>Phone number</strong>
            </div>
            <div className="user__confirmed">
              <strong>Confirmed</strong>
            </div>
          </li>
          {users.map(user => (
            <UserListItem user={user}/>
          ))}
        </ul>
      ) : (
        <div className="no-users">There is no users</div>
      )}
    </div>
  )
};

export default withAuth(MainPage);