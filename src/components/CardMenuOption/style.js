import styled from "styled-components"

const Container = styled.div`
	width: 80%;

	display: flex;
	align-item: center;
	justify-content: center;

	margin: 20px 0;

`

const CardLeft = styled.div`
	width: 50%;

	display: flex;
	flex-direction: column;
	gap: 20px;

	padding: 20px;

	color: #757575;
	font-weight: bold;

	background-color: #e6d5c1;
`

const CardRight = styled.div`
	width: 50%;

	display: flex;
	flex-direction: column;

	padding: 50px;

	background-color: #fff4e3;
`

const CardTitle = styled.h1`
	font-size: 32px;
`

const CardDescription = styled.p`
	font-size: 17px;
`

export {
	Container, CardLeft, CardRight, CardTitle, CardDescription
}