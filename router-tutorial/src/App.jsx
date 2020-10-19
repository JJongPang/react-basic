import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Profiles from './component/Profiles';

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
          <Link to='/profiles'>프로필</Link>
        </li>
       
      </ul>
      <hr/>
      <Route path='/' component={Home} exact />
      <Route path='/about' component={About} exact />
      <Route path='/profiles' component={Profiles} exact />
    </div>
  );
};

export default App;