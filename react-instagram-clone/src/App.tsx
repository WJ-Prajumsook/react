import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthenticatedRoute } from './component/auth-route';
import { Navbar } from './component/navbar';
import { ReactLoader } from './component/react-loader';
import { useAuthUser } from './hooks/use-auth-user';
import { Login } from './pages/login';
import { NotFound } from './pages/not-found';
import { Signup } from './pages/sign-up';
import './pages/home.css';
import { useState } from 'react';
import { Home } from './pages/home';
import UserContext from './context/user-context';
import { firebase } from './configuration/firebase-config';
import { Inbox } from './pages/inbox';
import { Explore } from './pages/explore';

export const App = () => {
  const home = <Home />;
  const inbox = <Inbox />
  const explore = <Explore />

  const { user } = useAuthUser();
  const [activeMenu, setActiveMenu] = useState('home');
  const [page, setPage] = useState(home);

  const menuHandle = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const action = event.currentTarget.id;
    setActiveMenu(action);

    switch (action) {
      case 'logout':
        firebase.auth().signOut();
        localStorage.removeItem('authUser');
        setPage(home);
        break;
      case 'home':
        setPage(home);
        break;
      case 'inbox':
        setPage(inbox);
        break;
      case 'explore':
        setPage(explore);
        break;
    }
  }

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Suspense fallback={ReactLoader}>
          <Switch>
            <AuthenticatedRoute user={user} path='/' exact>
              <div className="p-0">
                <Navbar menuHandle={menuHandle} activeMenu={activeMenu} />
                <div className="p-5" />
                {page}
              </div>
            </AuthenticatedRoute>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>

  );
}
