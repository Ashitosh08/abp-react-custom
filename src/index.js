import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from 'react-oidc-context'

import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
const oidcConfig = {
  authority: 'https://localhost:10001/',
  client_id: 'Onebill_App',
  redirect_uri: 'https://localhost:4200',
  response_type: 'code',
  scope:
    'openid AdministrationService IdentityService BillingService TenantService',
  filterProtocolClaims: true,
  loadUserInfo: true,
  metadata: {
    authorization_endpoint: 'https://localhost:10001/connect/authorize',
    token_endpoint: 'https://localhost:10001/connect/token',
    userinfo_endpoint: 'https://localhost:10001/connect/userinfo',
  },
  post_logout_redirect_uri: 'https://localhost:4200',
}
root.render(
  <StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </StrictMode>
)
