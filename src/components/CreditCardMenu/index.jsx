
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth'
import services from "../../services/services";
import { Input } from "../CardMenu/style";
import { Container, OptionMenu, Title, ButtonPosition, Form, Select, Warning } from "./style";

export default function CreditCardMenu() {
	const { token, cartCount } = useAuth()
	const [address, setAddress] = useState()
	const [creditCard, setCreditCard] = useState()

	useEffect(() => {
		handleUserAddress()
		handleCreditCard()
	}, [])

	async function handleUserAddress() {
		let promise = await services.getUserAddress(token)
		setAddress(promise.data.result)
	}

	async function handleCreditCard() {
		let promise = await services.getUserCreditCard(token)
		setCreditCard(promise.data.result)
	}

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

				{cartCount !== 0
					? (<>
						<Warning>Carrinho esta vázio</Warning>
					</>)
					: (<>
						<OptionMenu>
							SELECIONAR ENDEREÇO:
							<Select {...register("address_id")}>
							<option value="">Selecione...</option>
								{address?.map(({_id, street, number}, index) => (
									<option value={_id} key={index}>{`${street} - n:${number}`}</option>
								))}
							</Select>
						</OptionMenu>

						<OptionMenu>
							SELECIONAR CARTÃO:
							<Select {...register("credit_card_id")}>
							<option value="">Selecione...</option>
								{creditCard?.map(({_id, name}, index) => (
									<option value={_id} key={index}>{`${name}`}</option>
								))}
							</Select>
						</OptionMenu>

						<ButtonPosition>
							<Input type="submit" value="FINALIZAR COMPRA" button={true} />
						</ButtonPosition></>)}
			</Form>
		</Container>
	)
}
