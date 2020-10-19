import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from './component/About';
import HistorySample from './component/HistorySample';
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
        <li>
          <Link to='/history'>History 예제</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/about' component={About} exact />
      <Route path='/profiles' component={Profiles} exact />
      <Route path='/history' component={HistorySample} exact />
      <Route render={({location}) => (
          <div>
            <h2>이 페이는 존재하지 않습니다:</h2>
            <p>{location.pathname}</p>
          </div>
      )} />
      </Switch>
    </div>
  );
};

export default App;