import { 
  StyledFooter, Upper, Separator,
  Lower, InfoBox, Copyright,
  Flags, SocialBox } from "./style"
import flags from '../../assets/images/flags.png'


export default function Footer() {
  return(
    <StyledFooter>
      <Upper>
        <InfoBox>
          <h3>Categorias</h3>
          <p>Cano Alto</p>
          <p>Esportivo</p>
          <p>Cano Baixo</p>
        </InfoBox>
        <SocialBox>
          <h3>Redes Sociais</h3>
          <div className="wrapper">
            <ion-icon name="logo-facebook" onClick={() => window.open('https://www.facebook.com/', '_blank')}></ion-icon>
            <ion-icon name="logo-instagram" onClick={() => window.open('https://www.instagram.com/', '_blank')}></ion-icon>
            <ion-icon name="logo-twitter" onClick={() => window.open('https://twitter.com/', '_blank')}></ion-icon>
          </div>
        </SocialBox>
      </Upper>
      <Separator />
      <Lower>
        <Copyright>© 2022 SNEAKEER - Marca Registrada</Copyright>
        <Flags>
          <img src={flags} />
        </Flags>
      </Lower>
    </StyledFooter>
  )
}