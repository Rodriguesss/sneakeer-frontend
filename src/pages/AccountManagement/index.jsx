import CardMenuPersonalData from "../../components/CardMenu/PersonalData";
import CardMenuEmail from "../../components/CardMenu/Email";
import CardMenuPassword from "../../components/CardMenu/Password";
import CardMenuOption from "../../components/CardMenuOption";
import LateralMenu from "../../components/LateralMenu";
import { Container, MenuRight } from "./style";

export default function AccountManagement() {
	return (
		<Container>
			<LateralMenu />
			<MenuRight>
				<CardMenuOption
					title='Informações Pessoais'
					text='Seu nome e sobrenome são informações importantes para sua identificação, certifique-se de estar correto os dados.'>
					<CardMenuPersonalData />
				</CardMenuOption>

				<CardMenuOption
					title='Mudar email'
					text='Seu email é usado para fazer o login e receber promoções e 
            alertas referente a sua conta.'>
					<CardMenuEmail />
				</CardMenuOption>

				<CardMenuOption
					title='Mudar senha'
					text='A sua senha não deve ser compartilhada com ninguem.'>
					<CardMenuPassword />
				</CardMenuOption>
			</MenuRight>
		</Container>
	)
}