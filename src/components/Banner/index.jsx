import { Background, BannerText, Hover } from './style'

export default function Banner({product}) {
  return (
    <Background product={product} >
      <Hover>
        <BannerText product={product} >
          <h2>SNEAKEER FOOTWEAR</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facilis?</p>
        </BannerText>
      </Hover>
    </Background>
  )
}