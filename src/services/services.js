import axios from 'axios'

const API_URL = 'http://6b05-191-55-80-105.ngrok.io'

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

async function addCreditCard(body, token) {
  const headers = createHeader(token)
  const creditCardPromise = await axios.post(`${API_URL}/credit_card`, body, headers)

  return creditCardPromise
}

async function getProducts(body) {
  const getProductsPromise = await axios.get(`${API_URL}/products`, body)

  return getProductsPromise
}


const services = {
  login,
  register,
  changeEmail,
  changePassword,
  changePersonalData,
  addCreditCard,
  getProducts
}

export default services