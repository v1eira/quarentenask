import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import SingleQuestion from '../pages/SingleQuestion';
import Trending from '../pages/Trending';
import Notifications from '../pages/Notifications';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/question" component={SingleQuestion} />
      <Route path="/trending" component={Trending} />
      <Route path="/notifications" component={Notifications} />
    </Switch>
  );
}
