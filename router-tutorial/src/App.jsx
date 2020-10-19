import React from 'react';
import { Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  );
};

export default App;