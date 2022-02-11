import axios from 'axios'

const API_URL = 'http://localhost:3000'

async function login(body) {
  const loginPromise = await axios.post(`${API_URL}/login`, body)

  return loginPromise
}

async function register(body) {
  const registerPromise = await axios.post(`${API_URL}/register`, body)

  return registerPromise
}

const services = {
  login,
  register
}

export default services