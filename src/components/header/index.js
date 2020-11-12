import { navigate } from 'hookrouter';
import { logout } from 'utils/user';

// import { withUserProfile } from 'hocs/withAuth';

import './header.scss';

const Header = ({ profile }) => {
  const login = () => {
    navigate('/auth');
  };

  return (
    <div className="header">
      <div className="auth-action" onClick={() => profile ? logout() : login()}>
        {profile ? 'Logout' : 'Login'}
      </div>
    </div>
  )
};

export default Header;