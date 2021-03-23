import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Schema from './pages/Schema';
import Phonones from "./pages/Phonones";
import Uniquenesses from "./pages/Uniquenesses";
import Usage from "./pages/Usage";
import Levitation from "./pages/Levitation";
import Train from "./pages/Train";
import Magnones from "./pages/Magnones";
import Exitones from "./pages/Exitones";
import Classification from "./pages/Classification";
import LondonMoment from "./pages/LondonMoment";
import Kriotron from "./pages/Kriotron";
import Last from "./pages/Last";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/schema' component={Schema} />
        <Route path='/phonones' component={Phonones} />
        <Route path='/uniquenesses' component={Uniquenesses} />
        <Route path='/usage' component={Usage} />
        <Route path='/levitation' component={Levitation} />
        <Route path='/train' component={Train} />
        <Route path='/magnones' component={Magnones} />
        <Route path='/exitones' component={Exitones} />
        <Route path='/classification' component={Classification} />
        <Route path='/londonmoment' component={LondonMoment} />
          <Route path='/kriotron' component={Kriotron} />
          <Route path='/last' component={Last} />

        <Route
          render={function() {
            return <h1>Не найдено</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
