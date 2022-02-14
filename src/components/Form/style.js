import styled from "styled-components"

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const Title = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 42px;

	margin: 40px 0;
`

const Input = styled.input`
  	border: 3px solid #e6d5c1;
	outline: none;
	min-width: 250px;
	padding: 15px 20px;
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

export {
    Form,
	Title,
	Input
}