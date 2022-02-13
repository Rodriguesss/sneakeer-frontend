import { Background, BannerText, Hover } from './style'

export default function Banner() {
  return (
    <Background>
      <Hover>
        <BannerText>
          <h2>SNEAKEER TEST HEADER TITLE</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facilis?</p>
        </BannerText>
      </Hover>
    </Background>
  )
}