import Banner from "../../components/Banner";
import Header from "../../components/Header";
import FilterBar from "../../components/Filters";
import Footer from "../../components/Footer";
import { Container, Vertical, ProductGrid } from "./style";


export default function Products() {
  return(
    <>
      <Header />
      <Banner product />
      <Container>
        <FilterBar />
        <Vertical />
        <ProductGrid />
      </Container>
      <Footer />
    </>
  )
}