import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ToastContainer } from "react-toastify";

import { GlobalStyle } from './css'

import Modal from "./components/Modal"
import { ResetStyle } from "./css/reset";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/modal" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
