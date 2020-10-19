import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Profile from './component/Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
        <li>
          <Link to='/profile/velopert'>velopert 프로필</Link>
        </li>
        <li>
          <Link to='/profile/gildong'>gildong 프로필</Link>
        </li>
      </ul>
      <hr/>
      <Route path='/' component={Home} exact />
      <Route path='/about' component={About} exact />
      <Route path='/profile/:username' component={Profile} exact />
    </div>
  );
};

export default App;