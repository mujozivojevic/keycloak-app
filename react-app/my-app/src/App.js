import './App.css'
import { ReactKeycloakProvider } from '@react-keycloak/web';
import {AppRouter} from "./components/routes"
import keycloak from './keycloak'

function App() {
  
  const initOptions = { pkceMethod: 'S256' }

  return (
      <ReactKeycloakProvider
        authClient={keycloak} 
        initOptions={initOptions} >
        <div className="App">
          <AppRouter/>
        </div>
        </ReactKeycloakProvider>
  );
}

export default App;
