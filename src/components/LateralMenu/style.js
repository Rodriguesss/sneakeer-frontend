import styled from "styled-components"

const Container = styled.div`
	width: 30%;

	padding: 10px;
	margin: 0 15px;

	display: flex;
	flex-direction: column;
	gap: 25px;

	border-right: 1px solid black;
`

const Title = styled.h1`
	margin-bottom: 40px;

	font-size: 31px;
	font-weight: bold;
	color: #333333;

	cursor: pointer;
`

const OptionMenu = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 15px;

	font-size: 17px;
	font-weight: bold;
	line-height: 20px;

	cursor: pointer;

	:hover {
		color: #F23030;
	}
`

export {
	Title,
	Container,
	OptionMenu
}