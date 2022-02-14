import Banner from "../../components/Banner";
import Header from "../../components/Header";
import { Container, Filters, Vertical, ProductGrid } from "./style";


export default function Products() {

  return(
    <>
      <Header />
      <Banner product />
      <Container>
        <Filters></Filters>
        <Vertical />
        <ProductGrid></ProductGrid>
      </Container>
    </>
  )
}