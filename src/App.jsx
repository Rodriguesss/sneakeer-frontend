import { BrowserRouter, Routes, Route } from "react-router-dom"

import { GlobalStyle } from './css'

import Hello from './components/pages/Hello'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
