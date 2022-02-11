import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import services from "../../../services/services"
import { Title, Form, Input } from "../style"

export default function Login(subtitle) {
	const { register, handleSubmit } = useForm()
	
	async function singIn(data) {
		try {
			const promise = await services.login(data)

			console.log(promise)

			toast.success('Logado com sucesso!')
		} catch {
			toast.error('Erro ao fazer login')
		}
	}

	return (
		<>
			<Title ref={(_subtitle) => (subtitle = _subtitle)}>Entrar</Title>
			<Form onSubmit={handleSubmit((data) => singIn(data))}>
				<Input {...register("email")} type="text" placeholder="Email" />
				<Input {...register("password")} type="password" placeholder="Senha" />

				<Input type="submit" value="Entrar" button={true} />
			</Form>
		</>
	)
}
