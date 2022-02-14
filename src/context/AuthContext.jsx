import { useNavigate, useLocation } from 'react-router-dom';
import { createContext, useEffect, useState } from "react"
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext()

export function AuthProvider({ children }) {
	const navigate = useNavigate()
	const location = useLocation()
	const [user, setUser] = useLocalStorage('user', null)
	const [token, setToken] = useLocalStorage('token', null)
	const [isLogin, setIsLogin] = useState(true)
  const [modalIsOpen, setIsOpen] = useState(false)

	useEffect(() => {
		location.pathname === '/' && navigate('/home')
	}, [])

	 function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


	function login(token, user) {
		setToken(token)
		setUser(user)
	}

	function logout() {
		setUser(null)
		setToken(null)
	}

	return (
		<AuthContext.Provider value={{
			login,
			logout,
			token,
			user,
			isLogin,
			setIsLogin,
			modalIsOpen,
			setIsOpen,
			openModal,
			closeModal,
	 	}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext