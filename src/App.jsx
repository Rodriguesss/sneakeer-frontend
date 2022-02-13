import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AuthProvider from "./contexts/authContext";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from './css'
import { ResetStyle } from "./css/reset";
import Home from './pages/Home'
import Modal from "./components/Modal"
import Header from "./components/Header";

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
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
