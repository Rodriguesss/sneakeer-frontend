import axios from 'axios'

const API_URL = 'http://localhost:3000'

function createHeader(token) {
  return { headers: { Authorization: `Bearer ${token}` } }
}

async function login(body) {
  const loginPromise = await axios.post(`${API_URL}/login`, body)

  return loginPromise
}

async function register(body) {
  const registerPromise = await axios.post(`${API_URL}/register`, body)

  return registerPromise
}

async function changeEmail(body, token) {
  const headers = createHeader(token)
  const userPromise = await axios.put(`${API_URL}/change_email`, body, headers)

  return userPromise
}

async function changePassword(body, token) {
  const headers = createHeader(token)
  const userPromise = await axios.put(`${API_URL}/change_password`, body, headers)

  return userPromise
}

async function changePersonalData(body, token) {
  const headers = createHeader(token)
  const userPromise = await axios.put(`${API_URL}/change_personal_data`, body, headers)

  return userPromise
}

const services = {
  login,
  register,
  changeEmail,
  changePassword,
  changePersonalData
}

export default services