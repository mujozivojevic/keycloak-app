import axios from 'axios'
import { config } from '../../Constants'

export const fruitApi = {
    getFruits,
    addFruit,
    deleteFruit,
  }

  function getFruits(token) {
    return instance.get('/fruit',{  
    headers: {
      'Content-type': 'application/json',
      'Authorization': bearerAuth(token)
      }
    })
  }

  function addFruit(fruit, token) {
    return instance.post('/fruit', fruit, {
      headers: {
        'Content-type': 'application/json',
        'Authorization': bearerAuth(token)
      }
    })
  }

  function deleteFruit(fruitId, token) {
    return instance.delete(`/fruit/${fruitId}`, {
      headers: { 'Authorization': bearerAuth(token) }
    })
  }

  function bearerAuth(token) {
    return `Bearer ${token}`
  }

  const instance = axios.create({
    baseURL: config.url.API_BASE_URL
  })
  