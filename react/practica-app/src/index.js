import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react'

import * as serviceWorker from './serviceWorker';
import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain="dev-8gzv315x.us.auth0.com" 
      clientId='LlE5O6SCcRVSvMifp7Qau4MmatLxDonR' 
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
