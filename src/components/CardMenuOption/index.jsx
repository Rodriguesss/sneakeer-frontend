import { CardDescription, CardLeft, CardRight, CardTitle, Container } from "./style";

export default function CardMenuOption({ title, text, children }) {
    return (
        <Container>
            <CardLeft>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{text}</CardDescription>
            </CardLeft>

            <CardRight>
                {children}
            </CardRight>
        </Container>
    )
}