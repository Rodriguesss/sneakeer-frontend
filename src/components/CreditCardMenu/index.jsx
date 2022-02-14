
import { useForm } from "react-hook-form";
import { Input } from "../CardMenu/style";
import { Container, OptionMenu, Title, ButtonPosition, Form, Select } from "./style";

export default function CreditCardMenu() {
	const { register, handleSubmit } = useForm()

	async function handleChangeCreditCard(data) {
		try {
			await services.addCreditCard(data, token)

			toast.success('Cartão de crédito adicionado com sucesso!')
		} catch {
			toast.error('Cartão de crédito inválido.')
		}
	}

	return (
		<Container>
			<Form onSubmit={handleSubmit((data) => handleChangeCreditCard(data))}>
				<Title>CARRINHO DE COMPRA</Title>

				<OptionMenu>
					SELECIONAR ENDEREÇO:
					<Select {...register("address_id")}>
						<option value="">Selecione...</option>
						<option value="mastercard">Master Card</option>
						<option value="visa">VISA</option>
						<option value="elo">Elo</option>
						<option value="pag_seguro">Pag Seguro</option>
						<option value="mercado_pago">Mercado Pago</option>
					</Select>
				</OptionMenu>

				<OptionMenu>
					SELECIONAR CARTÃO:
					<Select {...register("credit_card_id")}>
						<option value="">Selecione...</option>
						<option value="mastercard">Master Card</option>
						<option value="visa">VISA</option>
						<option value="elo">Elo</option>
						<option value="pag_seguro">Pag Seguro</option>
						<option value="mercado_pago">Mercado Pago</option>
					</Select>
				</OptionMenu>

				<ButtonPosition>
					<Input type="submit" value="FINALIZAR COMPRA" button={true} />
				</ButtonPosition>
			</Form>
		</Container>
	)
}
