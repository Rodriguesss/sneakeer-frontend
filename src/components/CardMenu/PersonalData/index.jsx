import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'

import { Form, Input, ButtonPosition } from "../style"

import services from "../../../services/services"
import useAuth from "../../../hooks/useAuth.jsx"

export default function CardMenuPersonalData() {
	let { token } = useAuth()

	const { register, handleSubmit } = useForm()

	async function handleChangePersonalData(data) {
		try {
			await services.changePersonalData(data, token)

			toast.success('Dados alterado com sucesso!')
		} catch {
			toast.error('Dados inválidos.')
		}
	}

	return (
		<Form onSubmit={handleSubmit((data) => handleChangePersonalData(data))}>
			<Input {...register("first_name")} type="text" placeholder="Nome" />
			<Input {...register("last_name")} type="text" placeholder="Sobrenome" />

			<ButtonPosition>
				<Input type="submit" value="SALVAR ALTERAÇÕES" button={true} />
			</ButtonPosition>
		</Form>
	)
}