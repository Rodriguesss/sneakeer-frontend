import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'

import { Form, Input, ButtonPosition, CreditCardContainerCvvInput } from "../style"

import services from "../../../services/services"
import useAuth from "../../../hooks/useAuth.jsx"

export default function CardMenuAddress() {
	let { token } = useAuth()

	const { register, handleSubmit } = useForm()

	async function handleChangeAddress(data) {
		try {
			await services.addAddress(data, token)

			toast.success('Endereço cadastado com sucesso!')
		} catch {
			toast.error('Endereço inválido.')
		}
	}

	return (
		<Form onSubmit={handleSubmit((data) => handleChangeAddress(data))}>
			<Input {...register("street")} type="text" minLength="2" maxLength="40" placeholder="Rua" />
			<Input {...register("neighborhood")} type="text" minLength="5" maxLength="20" placeholder="Bairro" />
			<CreditCardContainerCvvInput>
				<Input {...register("uf")} cvv={true} maxLength="2" type="text" placeholder="UF" />
				<Input {...register("number")} number={true} maxLength="4" type="number" placeholder="Numero" />
			</CreditCardContainerCvvInput>
            <Input {...register("city")} type="text" minLength="4" maxLength="20" placeholder="Cidade" />

			<ButtonPosition>
				<Input type="submit" value="SALVAR DADOS" button={true} />
			</ButtonPosition>
		</Form>
	)
}