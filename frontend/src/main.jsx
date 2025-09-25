import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { StoreProvider } from './Appcontext/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>

<StoreProvider>

<Auth0Provider
    domain="dev-nfz0zae5uc41gmgq.us.auth0.com"
    clientId="eD4gmbSmvLjAamXtanIA8trUbmK94Ypj"
    authorizationParams={{
      redirect_uri: "https://college-website-frontend-9yal.onrender.com"
    }}
  >
    <App />
  </Auth0Provider>

  </StoreProvider>

</BrowserRouter>
)
