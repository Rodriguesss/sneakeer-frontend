import styled from "styled-components"

const Container = styled.div`
	width: 30%;

	padding: 10px 20px;
	margin: 0 15px;

	display: flex;
	flex-direction: column;
	gap: 25px;

	border-right: 1px solid black;
`

const Title = styled.h1`
	text-align: center;
	margin-bottom: 40px;

	font-size: 31px;
	font-weight: bold;
	color: #333333;

	cursor: pointer;
`

const OptionMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	font-size: 17px;
	font-weight: bold;
	line-height: 20px;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const ButtonPosition = styled.div`
	display: flex;
	justify-content: center;
`

const Select = styled.select`
	border: 3px solid #e6d5c1;
	outline: none;
	width: 250px;
	padding: 15px 5px;
	margin-left: 10px;
	font-size: 17px;
	color: #000;
	font-weight: bold;
	background-color: #fff4e3;
	transition: all .1s linear;
	-webkit-transition: all .1s linear;
	-moz-transition: all .1s linear;
	-webkit-appearance:none;

	::placeholder {
		font-size: 17px;
		font-weight: bold;
	}

	:focus {
		border: 3px solid #757575;
		border-radius: 5px;
	}
`

const Warning = styled.p`
	font-size: 17px;
	text-align: center;
`

export {
	Container,
	Title,
	OptionMenu,
	ButtonPosition,
	Form,
	Select,
	Warning
}