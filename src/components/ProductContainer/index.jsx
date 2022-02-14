import Carousel from "../Carousel"
import Spotlight from "../Spotlight"
import Reviews from "../Reviews"
import { StyledMain } from "./style"

export default function ProductContainer() {
  return(
    <StyledMain>
      <h2>PRODUTOS EM DESTAQUE</h2>
      <Carousel />
      <Spotlight />
      <Reviews />
    </StyledMain>
  )
}