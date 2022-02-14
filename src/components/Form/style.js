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

	${({ button }) => button && `
	font-size: 17px;
    font-weight: bold;
    color: #fff;

    width: 200px;

    margin-top: 80px;

    padding: 10px;

    border: 1px solid #F23030;
    border-radius: 5px;
    background-color: #F23030;

		cursor: pointer;

		:hover {
			background-color: #E23030;
		}
	`}

	${({ cvv }) => cvv && `
	min-width: 100px;
	width: 100px;` }}

	${({ number }) => number && `
		min-width: 175px;
		width: 100%;` }}
`

export {
    Form,
	Title,
	Input
}