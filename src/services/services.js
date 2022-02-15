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

async function addCreditCard(body, token) {
  const headers = createHeader(token)
  const creditCardPromise = await axios.post(`${API_URL}/credit_card`, body, headers)

  return creditCardPromise
}

async function addAddress(body, token) {
  const headers = createHeader(token)
  const creditCardPromise = await axios.post(`${API_URL}/address`, body, headers)

  return creditCardPromise
}

async function getProducts(body) {
  const getProductsPromise = await axios.get(`${API_URL}/products`, body)

  return getProductsPromise
}

async function getLimited(limit) {
  const getProductsPromise = await axios.get(`${API_URL}/products?limit=${limit}`)

  return getProductsPromise
}

async function getUserAddress(token) {
  const headers = createHeader(token)
  const getUserAddress = await axios.get(`${API_URL}/user_address`, headers)

  return getUserAddress
}

async function getUserCreditCard(token) {
  const headers = createHeader(token)
  const getUserCreditCard= await axios.get(`${API_URL}/user_credit_card`, headers)

  return getUserCreditCard
}

async function addOrder(body, token) {
  const headers = createHeader(token)
  const postOrder = await axios.post(`${API_URL}/order`, body, headers)

  return postOrder 
}

async function sendEmail(token) {
  const headers = createHeader(token)
  const sendEmail = await axios.get(`${API_URL}/send_email`, headers)

  return sendEmail
}

const services = {
  login,
  register,
  changeEmail,
  changePassword,
  changePersonalData,
  addCreditCard,
  addAddress,
  getProducts,
  getLimited,
  getUserAddress,
  getUserCreditCard,
  addOrder,
  sendEmail
}

export default services