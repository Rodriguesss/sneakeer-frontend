import { createContext, useState } from "react"

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const persistedToken = JSON.parse(localStorage.getItem("token"))
    const [token, setToken] = useState(persistedToken)

    function login(token) {
        setToken(token)
        localStorage.setItem("token", JSON.stringify(token))
    }

    function logout() {
        setToken("")
        localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider value={{ login, logout, token }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext