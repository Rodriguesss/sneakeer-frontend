import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from './css'
import { ResetStyle } from "./css/reset";
import { AuthProvider } from "./contexts/AuthContext";
import Home from './pages/Home'
import Modal from "./components/Modal"
import AccountManagement from "./pages/AccountManagement"

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <ToastContainer />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/account-management" element={<AccountManagement />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
