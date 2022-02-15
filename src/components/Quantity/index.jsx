import { useEffect, useState } from "react"
import { ButtonQuantity, Container, Info, LeftContainer, RightContainer } from "./style"

export default function Quantity() {
	const [count, setCount] = useState(1)

	return (
		<Container>
			<LeftContainer>
				<Info>Quantidade:</Info>
				<Info>{count}</Info>
			</LeftContainer>
			<RightContainer>
				<ButtonQuantity onClick={() => {setCount(count + 1)}}>+</ButtonQuantity>
				<ButtonQuantity onClick={() => {setCount(count - 1)}}>-</ButtonQuantity>
			</RightContainer>
		</Container>
	)
}
