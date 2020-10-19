import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';

const App = () => {
  return (
    <div>
      <Route path='/' component={Home} exact />
      <Route path={['/about', '/info']} component={About} exact />
    </div>
  );
};

export default App;