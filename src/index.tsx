
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'main.css';
import App from 'App';
import store from 'store';

const root = () => {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider >
  );
};

render(
  root(),
  document.getElementById('root'),
);
