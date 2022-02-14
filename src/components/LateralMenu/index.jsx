import { Container, OptionMenu, Title } from "./style"
import { IoMailOutline, IoPerson, IoLockOpen, IoJournalOutline } from 'react-icons/io5';

export default function LateralMenu() {
	return (
		<Container>
			<Title>GERENCIAMENTO DE CONTA</Title>

			<OptionMenu>
				<IoPerson size={25} />
				INFORMAÇÕES PESSOAIS
			</OptionMenu>

			<OptionMenu>
				<IoMailOutline size={25} />
				MUDAR EMAIL
			</OptionMenu>

			<OptionMenu>
				<IoLockOpen size={25} />
				MUDAR SENHA
			</OptionMenu>

			<OptionMenu>
				<IoJournalOutline size={25} />
				ADICIONAR CARTÃO DE CRÉDITO
			</OptionMenu>
		</Container>
	)
}