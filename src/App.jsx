import { BrowserRouter, Routes, Route } from "react-router-dom"

import { GlobalStyle } from './css'

import Modal from "./components/Modal"

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/modal" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
