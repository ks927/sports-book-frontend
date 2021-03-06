/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import UserPage from 'containers/UserPage/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';
import SignUpPage from '../SignUpPage/index';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/users" component={UserPage} />
        <Route exact path="/users/:id" component={ProfilePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
