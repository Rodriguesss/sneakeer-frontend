import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from './css'
import { ResetStyle } from "./css/reset";
import { AuthProvider } from "./context/AuthContext";
import Home from './pages/Home'
import Modal from "./components/Modal"
import AccountManagement from "./pages/AccountManagement"
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";

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
            <Route path="/account_management" element={<AccountManagement />} />
            <Route path="/products" element={<Products />} />
            <Route path="/shopping_cart" element={<ShoppingCart />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
