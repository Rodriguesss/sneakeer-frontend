import styled from "styled-components"

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const Input = styled.input`
	border: 1px solid lightgrey;
	border-radius: 5px;
	outline: none;
	min-width: 250px;
	padding: 15px 20px;
	font-size: 16px;
	transition: all .1s linear;
	-webkit-transition: all .1s linear;
	-moz-transition: all .1s linear;
	-webkit-appearance:none;

	${({button}) => button && `
	font-size: 14px;

	cursor: pointer;
	`}

	:focus {
		border: 2px solid #3951b2;
	}
`

const Title = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 42px;

	margin: 40px 0;
`

export {
    Form,
	Input,
	Title
}