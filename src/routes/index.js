import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import SingleQuestion from '../pages/SingleQuestion';
import Trending from '../pages/Trending';
import Inbox from '../pages/Inbox';
import Notifications from '../pages/Notifications';
import Search from '../pages/Search';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} isAuth />
      <Route path="/signup" component={SignUp} isAuth />

      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/question" component={SingleQuestion} />
      <Route path="/trending" component={Trending} />
      <Route path="/inbox" component={Inbox} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/search" component={Search} />
    </Switch>
  );
}
