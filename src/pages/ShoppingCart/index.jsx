import { useState } from 'react'
import CreditCardMenu from "../../components/CreditCardMenu"
import { Container, MenuRight } from "./style"
import { CartGrid } from "../../components/CartGrid"
import Header from '../../components/Header/index'
import Banner from '../../components/Banner/index'

export default function ShoppingCart() {
	const [total, setTotal] = useState(1)

	return (
		<>
			<Header />
			<Banner />
			<Container>
				<CreditCardMenu total={total} />
				<MenuRight>
					<CartGrid total={total} setTotal={setTotal} />
				</MenuRight>
			</Container>
		</>

	)
}