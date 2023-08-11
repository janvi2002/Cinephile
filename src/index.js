import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain="dev-irzyuq7uhg11xj7o.us.auth0.com"
    clientId="3KG29K6JITru6ZwaXsa4gDgIE7ak8l9t"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    useRefreshTokens={ true }
      cacheLocation="memory"
  >
    <App />
  </Auth0Provider>
);

