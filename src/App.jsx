import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ToastContainer } from "react-toastify"

import { GlobalStyle } from './css'
import { ResetStyle } from "./css/reset"

import { AuthProvider } from "./context/AuthContext"

import Modal from "./components/Modal"
import AccountManagement from "./pages/AccountManagement"

function App() {
  return (
    <AuthProvider>
      <ResetStyle />
      <GlobalStyle />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/modal" element={<Modal />} />
          <Route path="/account-management" element={<AccountManagement />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
