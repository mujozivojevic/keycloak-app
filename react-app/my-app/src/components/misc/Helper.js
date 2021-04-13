export const isAdmin = (keycloak) => {
    return keycloak && keycloak.tokenParsed && keycloak.tokenParsed.resource_access['react-ff'].roles.includes('admin')
  }