import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import { 
  StyledHeader, UpperBar, Logo,
  SearchInput, LoginButton,
  Vertical, Horizontal, ShoppingCart,
  CartCount, Categories, StyledLink,
  Left, Right
} from './style';
import logo from '../../assets/images/logo.png'


export default function Header() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <UpperBar>
        <Left>
          <Logo src={logo} alt="sneakeer website logo"/>
          <ion-icon name="search-outline"></ion-icon>
          <SearchInput type="text" placeholder="procurar..." />
        </Left>
        <Right>
          {
            user
            ? <span>Olá, <StyledLink to='/userpage'>{user.name}</StyledLink></span>
            : <LoginButton onClick={()=> navigate('/modal')}>Login/Cadastro</LoginButton>
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
        <StyledLink to='/exemplo1' >Exemplo 01</StyledLink>
        <StyledLink to='/exemplo2' >Exemplo 02</StyledLink>
        <StyledLink to='/exemplo3' >Exemplo 03</StyledLink>
      </Categories>
    </StyledHeader>
  )
}