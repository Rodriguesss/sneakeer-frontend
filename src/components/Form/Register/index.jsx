import { toast } from 'react-toastify'
import { useForm } from "react-hook-form"
import services from '../../../services/services'
import { Title, Form, Input } from "../style"

export default function Register() {
	const { register, handleSubmit } = useForm()

	async function singUp(data) {
		try {
			await services.register(data)

			toast.success('Usuário cadastrado com sucesso!')
		} catch {
			toast.error('Não foi possivel cadastrar sua conta, revise os dados preenchidos.')
		}
	}

	return (
		<>
			<Title>Cadastrar</Title>
			<Form onSubmit={handleSubmit(data => singUp(data))}>
				<Input {...register("first_name")} type="text" minLength="2" maxLength="20" placeholder="Nome" />
				<Input {...register("last_name")} type="text" minLength="2" maxLength="40" placeholder="Sobrenome" />
				<Input {...register("email")} type="email" placeholder="Email" />
				<Input {...register("password")} type="password" minLength="3" maxLength="15" placeholder="Senha" />
				<Input {...register("password_confirmation")} type="password" minLength="3" maxLength="15" placeholder="Confirme a senha" />

				<Input type="submit" value="Registrar" button={true} />
			</Form>
		</>
	)
}
