import 'react-toastify/dist/ReactToastify.css'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        min-height: 100vh;

        word-break: break-word;
        
        display: flex;
        justify-content: center;

        font-family: 'Poppins', sans-serif;
        font-weight: 300;
    }
`
