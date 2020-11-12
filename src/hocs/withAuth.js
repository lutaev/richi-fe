import React, { createContext, useState, useEffect } from 'react';
import cookies from 'browser-cookies';
import { navigate } from 'hookrouter';

import { getProfile } from 'api/user';
import Header from 'components/header';
import { logout } from 'utils/user';

const AuthContext = createContext(null);

const bridge = {};

const loadProfile = async () => {
  try {
    const result = await getProfile();
    bridge.setProfile(result);
  } catch(err) {
    logout();
  }
};

export const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  bridge.setProfile = setProfile;

  return (
    <AuthContext.Provider
      value={{
        profile,
        loadProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const withUserProfile = (Component) => (props) => {
  return (
    <AuthContext.Consumer>
      {source => {
        return (
          <Component
            {...props}
            profile={source.profile}
          />
        );
      }}
    </AuthContext.Consumer>
  )
};

const withAuth = (Component) => (props) => {
  const token = cookies.get('access_token');
  if(!token) {
    setTimeout(() => { navigate('auth') }, 0);
    return null;
  }

  useEffect(loadProfile, []);

  return (
    <AuthContext.Consumer>
      {(source) => {
        if(!source.profile) {
          return null;
        }

        return (
          <>
            <Header profile={source.profile}/>
            <Component
              {...props}
              profile={source.profile}
            />
          </>
        );
      }}
    </AuthContext.Consumer>
  )
};

export default withAuth;