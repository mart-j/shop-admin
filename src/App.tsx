import React, { FC, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import { SignedInContext } from './context/SignedInContext';
import PrivateRoute from './components/common/PrivateRoute/PrivateRoute';
import Home from './pages/Home/Home';

const App: FC = () => {
  const { isSigned, loading } = useContext(SignedInContext);

  if (loading) {
    return null;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {isSigned ? <Redirect to="/" /> : <Login />}
        </Route>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};
export default App;
