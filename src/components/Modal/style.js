import styled from "styled-components"

const TitleHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

const Button = styled.button`
	all: unset;

	cursor: pointer;
`

const Link = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 20px;

	b {
		cursor: pointer;
	}
`

export {
	TitleHeader,
	Link,
	Button
}