import { 
  StyledFooter, Upper, Separator,
  Lower, InfoBox, Copyright,
  Flags, SocialBox } from "./style"
import flags from '../../assets/images/flags.png'
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AuthContext from "../../context/AuthContext";


export default function Footer() {
  const navigate = useNavigate();
  const { setModifier } = useAuth(AuthContext);

  return(
    <StyledFooter>
      <Upper>
        <InfoBox>
          <h3>Categorias</h3>
          <p onClick={()=> {
            setModifier('canoalto');
            navigate('/products');
          } }>Cano Alto</p>
          <p onClick={()=> {
            setModifier('esportivo');
            navigate('/products');
          } }>Esportivo</p>
          <p onClick={()=> {
            setModifier('canobaixo');
            navigate('/products');
          } }>Cano Baixo</p>
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