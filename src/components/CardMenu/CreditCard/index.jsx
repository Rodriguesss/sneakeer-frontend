import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'

import { Form, Input, ButtonPosition, CreditCardContainerCvvInput, Select } from "../style"

import services from "../../../services/services"
import useAuth from "../../../hooks/useAuth.jsx"

export default function CardMenuCreditCard() {
	let { token } = useAuth()

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
		<Form onSubmit={handleSubmit((data) => handleChangeCreditCard(data))}>
			<Input {...register("name")} type="text" minLength="10" maxLength="30" placeholder="Nome do cartão" />
			<Input {...register("number")} type="number" minLength="13" maxLength="19" placeholder="Número do cartão" />
			<CreditCardContainerCvvInput>
				<Input {...register("cvv")} cvv={true} maxLength="3" type="number" placeholder="CVV" />
				<Select {...register("card_brand")} brand={true}>
					<option value="">Selecione...</option>
					<option value="mastercard">Master Card</option>
					<option value="visa">VISA</option>
					<option value="elo">Elo</option>
					<option value="pag_seguro">Pag Seguro</option>
					<option value="mercado_pago">Mercado Pago</option>
				</Select>
			</CreditCardContainerCvvInput>

			<ButtonPosition>
				<Input type="submit" value="SALVAR DADOS" button={true} />
			</ButtonPosition>
		</Form>
	)
}