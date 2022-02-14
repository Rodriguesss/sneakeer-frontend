import styled from "styled-components"
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
  width: 80vw;
  height: 120px;

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 100px;
  right: 100px;
  z-index: 3;

`
const UpperBar = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Categories = styled.div`
  width: 100%;
  height: 50%;

  font-size: 20px;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Logo = styled.img`
  width: 95px;
  height: 100%;
`

const SearchInput = styled.input`
  all: unset;

  width: 250px;
  height: 30px;
  color: #fff;

  &::placeholder{
    color: #fff;
  }
`

const LoginButton = styled.button`
  width: 150px;
  height: 100%;

  border: none;
  background: none;
  cursor: pointer;

  color: #fff;
  font-size: 14px;
`

const Vertical = styled.div`
  width: 1px;
  height: 100%;
  background-color: #d9d8d7;
`

const Horizontal = styled.div`
  height: 1px;
  width: calc(100% - 95px);
  align-self: flex-end;
  background-color: #d9d8d7;
`

const ShoppingCart = styled.div`
  width: 100px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  cursor: pointer;
  
  & >ion-icon {
    font-size: 26px;
    color: #ff3232;
  }
`

const CartCount = styled.div`
  width: 18px;
  height: 20px;
  background-color: #ff3232;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 10px;
  right: 30px;

  border-radius: 5px;

  font-size: 14px;
  font-weight: 600;
  color: #fff;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

const Left = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  & >ion-icon {
    font-size: 16px;
    color: #fff;
    margin-right: 5px;
  }
`

const Right = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export {
  StyledHeader,
  UpperBar,
  Categories,
  Logo,
  SearchInput,
  LoginButton,
  Vertical,
  Horizontal,
  ShoppingCart,
  CartCount,
  StyledLink,
  Left,
  Right,
}