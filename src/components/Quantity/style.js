import styled from "styled-components"

const Container = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`

const Info = styled.p`
    font-size: 22px;
`

const ButtonQuantity = styled.button`
    border: 1px solid #E23030;
    border-radius: 15%;
	outline: none;
	padding: 5px 8px;
	font-size: 17px;
	color: #FFF;
	font-weight: bold;
  	background-color: #E23030;
    cursor: pointer;
    font-weight: bold;
`

const LeftContainer = styled.div`
    display: flex;
    gap: 15px;
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export {
    Container,
    Info,
    LeftContainer,
    RightContainer,
    ButtonQuantity
}