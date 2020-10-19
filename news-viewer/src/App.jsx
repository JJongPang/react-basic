import React, { useCallback, useState } from 'react';
import { Route } from 'react-router-dom';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import NewsPage from './components/NewsPage';

const App = () => {

  return <Route path='/:category?' component={NewsPage} />

}

export default App;