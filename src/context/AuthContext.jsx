import { useNavigate, useLocation } from 'react-router-dom';
import { createContext, useState } from "react"
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const navigate = useNavigate()
    const location = useLocation()  
    const [user, setUser] = useLocalStorage('user', null)
    const [token, setToken] = useLocalStorage('token', null)

    useEffect(() => {
        location.pathname === '/' && navigate('/home')
    }, [])
    

    function login({token, user}) {
        setToken(token)
        setUser(user)
    }

    function logout() {
        setUser(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ login, logout, token, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext