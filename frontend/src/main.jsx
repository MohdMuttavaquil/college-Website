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
      domain="dev-l16pc0o8v77fr3av.us.auth0.com"
      clientId="kvv2PB2TRKZoH862Lqa3PKE25OVBSNtP"
    authorizationParams={{
      redirect_uri: "https://college-website-liard.vercel.app"
    }}
  >
    <App />
  </Auth0Provider>

  </StoreProvider>

</BrowserRouter>
)
