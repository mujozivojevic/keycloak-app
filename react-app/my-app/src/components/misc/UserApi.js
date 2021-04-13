export const userApi = {
    getUsers,
    addUser,
    deleteUser,
  }

  function getUsers(token) {
    return instance.get('/user',{  
    headers: {
      'Content-type': 'application/json',
      'Authorization': bearerAuth(token)
      }
    })
  }

  function addUser(user, token) {
    return instance.post('/user', fruit, {
      headers: {
        'Content-type': 'application/json',
        'Authorization': bearerAuth(token)
      }
    })
  }

  function deleteUser(userId, token) {
    return instance.delete(`/user/${fruitId}`, {
      headers: { 'Authorization': bearerAuth(token) }
    })
  }

  function bearerAuth(token) {
    return `Bearer ${token}`
  }

  const instance = axios.create({
    baseURL: config.url.API_BASE_URL
  })