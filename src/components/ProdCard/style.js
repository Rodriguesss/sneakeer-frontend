import styled from 'styled-components';

const Card = styled.div`
  height: 350px;
  width: 200px;

  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

  background-color: #fff;
  border-right: 0.5px solid #f2f2f2;

  font-weight: 500;

  .cart {
    background-color: #fa3232;
    width: 26px;
    height: 26px;
    border-radius: 5px;
    cursor: pointer;

    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 8px;
    right: 8px;

    ion-icon {
      font-size: 22px;
      color: #fff;
    }
  }

  img {
    width: 80%;
    height: 60%;
    margin-top: 10px;
    margin-bottom: 8px;
    border-radius: 5px;
    object-fit: cover;
  }

  p {
    color: #404040;
    margin-bottom: 8px;
  }

  span {
    color: #a60a17;
    margin-bottom: 8px;
  }

  &:hover {
    box-shadow: -10px 0px 13px -7px #d9d9d9, 10px 0px 13px -7px #d9d9d9, 5px 5px 15px 5px #d9d9d9;
    z-index: 1;
    transition-duration: 0.5s;

    .cart {
      display: flex;
    }
  }

  &:last-child {
    border-right: none;
  }
`

export {
  Card,
}