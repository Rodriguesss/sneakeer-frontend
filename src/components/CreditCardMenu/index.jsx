
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useAuth from '../../hooks/useAuth'
import services from "../../services/services";

import { Input } from "../CardMenu/style";
import { Container, OptionMenu, Title, ButtonPosition, Form, Select, Warning } from "./style";

export default function CreditCardMenu({ total }) {
	const { token, cart, setCart } = useAuth()
	const [address, setAddress] = useState()
	const [creditCard, setCreditCard] = useState()
	const { register, handleSubmit } = useForm()
	const navigate = useNavigate()

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

	async function handleChangeCreditCard(data) {
		try {
			data.address_id === '' || data.credit_card_id === ''
				? toast.error('Preenche todos os dados.')
				: handleOrder(data)

		} catch {
			toast.error('Cartão de crédito inválido.')
		}
	}

	async function handleOrder(data) {
		let sneakers = []

		cart.forEach(({ _id }) => { sneakers.push({ _id }) })
		
		/*await services.addCreditCard({...data, sneakers}, token)*/
		setCart([])

		navigate('/home')

		toast.success('Compra efetuada com sucesso!')
	}

	return (
		<Container>
			<Title>CARRINHO DE COMPRA</Title>

			{cart.length === 0
				? (<>
					<Warning>Carrinho esta vázio</Warning>
				</>)
				: (<>
					<Form onSubmit={handleSubmit((data) => handleChangeCreditCard(data))}>
						<OptionMenu>
							SELECIONAR ENDEREÇO:
							<Select {...register("address_id")}>
								<option value="">Selecione...</option>
								{address?.map(({ _id, street, number }, index) => (
									<option value={_id} key={index}>{`${street} - n:${number}`}</option>
								))}
							</Select>
						</OptionMenu>

						<OptionMenu>
							SELECIONAR CARTÃO:
							<Select {...register("credit_card_id")}>
								<option value="">Selecione...</option>
								{creditCard?.map(({ _id, name }, index) => (
									<option value={_id} key={index}>{`${name}`}</option>
								))}
							</Select>
						</OptionMenu>

						<OptionMenu>
							TOTAL: {total}
						</OptionMenu>

						<ButtonPosition>
							<Input type="submit" value="FINALIZAR COMPRA" button={true} />
						</ButtonPosition>
					</Form></>)}
		</Container>
	)
}
