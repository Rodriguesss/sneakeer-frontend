import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'

import { Form, Input, ButtonPosition } from "../style"

import services from "../../../services/services"
import useAuth from "../../../hooks/useAuth.jsx"

export default function CardMenuEmail() {
	let { token } = useAuth()

	const { register, handleSubmit } = useForm()

	async function handleChangeEmail(data) {
		try {
			const promise = await services.changeEmail(data, token)

			toast.success('Email alterado com sucesso!')
		} catch {
			toast.error('Email inválido.')
		}
	}

	return (
			<Form onSubmit={handleSubmit((data) => handleChangeEmail(data))}>
				<Input {...register("email")} type="text" placeholder="Email" />

				<ButtonPosition>
					<Input type="submit" value="SALVAR ALTERAÇÃO" button={true} />
				</ButtonPosition>
			</Form>
	)
}