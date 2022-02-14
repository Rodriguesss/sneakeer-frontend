import { Container, OptionMenu, Title } from "./style"
import { IoMailOutline, IoPerson, IoLockOpen, IoHomeOutline, IoCard } from 'react-icons/io5';

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
				<IoHomeOutline size={25} />
				ADICIONAR ENDEREÇO
			</OptionMenu>

			<OptionMenu>
				<IoCard size={25} />
				ADICIONAR CARTÃO DE CRÉDITO
			</OptionMenu>
		</Container>
	)
}