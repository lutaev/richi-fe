import { useRoutes } from 'hookrouter';
import { AuthProvider } from 'hocs/withAuth';
import MainPage from 'pages/main';
import AuthPage from 'pages/auth';
import NotFound from 'pages/not-found';
import { ThemeProvider } from '@rmwc/theme';

import './App.scss';

const routes = {
  '/': () => <MainPage name="main" />,
  '/auth': () => <AuthPage name="auth" />
};

function App() {
  const routeResult = useRoutes(routes);

  const themeOptions = {
    primary: '#20345b'
  };

  return (
    <ThemeProvider options={themeOptions}>
      <AuthProvider>
        <div className="App">
          {routeResult || <NotFound/>}
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
