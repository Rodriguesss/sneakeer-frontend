import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import { 
  StyledHeader, UpperBar, Logo,
  SearchInput, LoginButton,
  Vertical, Horizontal, ShoppingCart,
  CartCount, Categories, StyledLink,
  Left, Right
} from './style';
import ModalComponent from '../Modal';
import logo from '../../assets/images/logo.png'

export default function Header() {
  const { openModal } = useAuth();
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <UpperBar>
        <Left>
          <Logo src={logo} alt="sneakeer website logo" onClick={()=> navigate('/home')}/>
          <ion-icon name="search-outline"></ion-icon>
          <SearchInput type="text" placeholder="Procurar..." />
        </Left>
        <Right>
          {
            user
            ? <span>Olá, <StyledLink to='/account_management'>{user.first_name}</StyledLink></span>
            : <LoginButton onClick={()=> openModal()}>Login/Cadastro</LoginButton>
          }
          <Vertical />
          <ShoppingCart>
            <ion-icon name="cart-outline"></ion-icon>
            <CartCount>10</CartCount>
          </ShoppingCart>
        </Right>
      </UpperBar>
      <Horizontal />
      <Categories>
        <StyledLink to='/exemplo1' >Cano Alto</StyledLink>
        <StyledLink to='/exemplo2' >Esportivo</StyledLink>
        <StyledLink to='/exemplo3' >Cano Baixo</StyledLink>
      </Categories>
      <ModalComponent />
    </StyledHeader>
  )
}