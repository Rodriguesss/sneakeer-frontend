import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import useAuth from "../../../hooks/useAuth"
import services from "../../../services/services"
import { Title, Form, Input } from "../style"

export default function Login() {
	const { login } = useAuth()
	const { register, handleSubmit } = useForm()

	async function singIn(data) {
		try {
			const promise = await services.login(data)

			login(promise.data.token, promise.data.user)

			toast.success('Logado com sucesso!')
		} catch {
			toast.error('Usuário ou senha inválidos.')
		}
	}

	return (
		<>
			<Title>Entrar</Title>
			<Form onSubmit={handleSubmit((data) => singIn(data))}>
				<Input {...register("email")} type="text" placeholder="Email" />
				<Input {...register("password")} type="password" placeholder="Senha" />

				<Input type="submit" value="ENTRAR" button={true} />
			</Form>
		</>
	)
}
