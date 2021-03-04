import React from 'react';
import store from './store';
import MainRouter from './routers';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
};

export default App;
