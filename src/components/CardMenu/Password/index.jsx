import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'

import { Form, Input, ButtonPosition } from "../style"

import services from "../../../services/services"
import useAuth from "../../../hooks/useAuth.jsx"

export default function CardMenuPassword() {
	let { token } = useAuth()

	const { register, handleSubmit } = useForm()

	async function handleChangePassword(data) {
		try {
			await services.changePassword(data, token)

			toast.success('Senha alterada com sucesso!')
		} catch {
			toast.error('Senha inválida.')
		}
	}

	return (
			<Form onSubmit={handleSubmit((data) => handleChangePassword(data))}>
				<Input {...register("password")} type="text" placeholder="Senha antiga" />
                <Input {...register("new_password")} type="password" placeholder="Nova senha" />
                <Input {...register("new_password_confirmation")} type="password" placeholder="Repetir nova senha" />

				<ButtonPosition>
					<Input type="submit" value="SALVAR ALTERAÇÃO" button={true} />
				</ButtonPosition>
			</Form>
	)
}