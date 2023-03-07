import './styles.css'
import { useAuth } from 'react-oidc-context'

export default function App() {
  const auth = useAuth()

  return (
    <div className='App'>
      <h1>Hello CodeSandbox</h1>
      <button onClick={() => void auth.signinRedirect()}>Log in</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  )
}
