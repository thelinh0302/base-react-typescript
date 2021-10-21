// import Home from '@containers/Home';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
// import { hello } from './utils';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {' '}
      <Routes />{' '}
    </BrowserRouter>
  );
};

export default App;
