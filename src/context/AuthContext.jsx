import { useNavigate, useLocation } from 'react-router-dom';
import { createContext, useEffect, useState } from "react"
import useLocalStorage from '../hooks/useLocalStorage';
import services from '../services/services'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
	const navigate = useNavigate()
	const location = useLocation()
	const [user, setUser] = useLocalStorage('user', null)
	const [token, setToken] = useLocalStorage('token', null)
	const [isLogin, setIsLogin] = useState(true)
	const [modalIsOpen, setIsOpen] = useState(false)
	const [highlight, setHighlight] = useState()
	const [cartCount, setCount] = useState(0)
	const [modifier, setModifier] = useState(null)
	const [size, setSize] = useState(null)
	const [filters, setFilters] = useState(null)
	const [productList, setProductList] = useState(null);
	const [cart, setCart] = useLocalStorage('cart', null);

	useEffect(() => {
		location.pathname === '/' && navigate('/home')
		handleProducts();
	}, [])

	async function handleProducts() {
		// if( modifier ) {
		//   const { data } = await services.getProducts(modifier, token);
		//   setProductList(data.result);
		// } else {
		//   const { data } = await services.getProducts(filters, token)
		//   setProductList(data.result);
		// }
		const { data } = await services.getProducts({})
		setProductList(JSON.parse(JSON.stringify(data.result)));
	}

	function addToCart(id) {
		const product = productList.find(({ _id }) => _id === id);
		cart
			? setCart([...cart, product])
			: setCart([product])
	}

	function removeToCart(id) {
		setCart(cart.filter(({_id}) => _id !== id));
	}

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
			login, logout,
			token, user,
			isLogin, setIsLogin,
			modalIsOpen, setIsOpen,
			openModal, closeModal,
			highlight, setHighlight,
			cartCount, setCount,
			modifier, setModifier,
			size, setSize,
			filters, setFilters,
			productList, setProductList,
			cart, setCart,
			handleProducts, addToCart,
			removeToCart
		}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext