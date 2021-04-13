import Keycloak from 'keycloak-js'
import { config } from './Constants'

const keycloakConfig = {
   url: config.url.KEYCLOAK_BASE_URL + '/auth',
   realm: "codecta",
   clientId: "react-ff",
   onLoad: 'login-required'
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak
