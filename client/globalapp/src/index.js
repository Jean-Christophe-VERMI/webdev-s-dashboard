import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './styles/index.css';
import App from '../src/containers/App';

import { store, persistor } from './store';


import * as serviceWorker from './serviceWorker';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
    </BrowserRouter>
  </Provider>

);

const target = document.getElementById('root');
render(rootReactElement, target);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
