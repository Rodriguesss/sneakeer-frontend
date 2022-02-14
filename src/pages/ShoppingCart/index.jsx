import CardMenuPersonalData from "../../components/CardMenu/PersonalData"
import CardMenuOption from "../../components/CardMenuOption"
import CreditCardMenu from "../../components/CreditCardMenu"
import { Container, MenuRight } from "./style"

export default function ShoppingCart() {
	return (
		<Container>
			<CreditCardMenu />
			<MenuRight>
				<CardMenuOption
					title='Informações Pessoais'
					text='Seu nome e sobrenome são informações importantes para sua identificação, certifique-se de estar correto os dados.'>
					<CardMenuPersonalData />
				</CardMenuOption>
			</MenuRight>
		</Container>

	)
}