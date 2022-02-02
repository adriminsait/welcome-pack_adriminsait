import React from 'react';
import ReactDOM from 'react-dom';
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

serviceWorker.unregister();
