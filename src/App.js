import { useRoutes } from 'hookrouter';
import MainPage from 'pages/main';
import AuthPage from 'pages/auth';
import NotFound from 'pages/not-found';
import './App.scss';

const routes = {
  '/': () => <MainPage />,
  '/auth': () => <AuthPage/>
};

function App() {
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      {routeResult || <NotFound/>}
    </div>
  );
}

export default App;
