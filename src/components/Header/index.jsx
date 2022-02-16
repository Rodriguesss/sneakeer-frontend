import { Link, useNavigate } from 'react-router-dom';
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
  const { user, openModal, logout, cart, setModifier } = useAuth();
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <UpperBar>
        <Left>
          <Logo src={logo} alt="sneakeer website logo" onClick={() => navigate('/home')} />
          <ion-icon name="search-outline"></ion-icon>
          <SearchInput type="text" placeholder="Procurar..." />
        </Left>
        <Right>
          {
            user
              ? <span>Olá,
                <StyledLink to='/account_management'> {user.first_name}</StyledLink>
                <span onClick={() => logout()}> LogOut</span>
              </span>
              : <LoginButton onClick={() => openModal()}>Login/Cadastro</LoginButton>
          }
          <Vertical />
          <ShoppingCart>
            <Link to="/shopping_cart">
              <ion-icon name="cart-outline"></ion-icon>
            </Link>
            <CartCount>{cart === null ? 0 : cart.length}</CartCount>
          </ShoppingCart>
        </Right>
      </UpperBar>
      <Horizontal />
      <Categories>
        <StyledLink to='/products' onClick={() => setModifier('canoalto')} >Cano Alto</StyledLink>
        <StyledLink to='/products' onClick={() => setModifier('esportivo')} >Esportivo</StyledLink>
        <StyledLink to='/products' onClick={() => setModifier('canobaixo')} >Cano Baixo</StyledLink>
      </Categories>
      <ModalComponent />
    </StyledHeader>
  )
}