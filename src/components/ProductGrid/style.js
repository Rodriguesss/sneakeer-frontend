import styled from "styled-components";

const Grid = styled.div`
  width: 900px;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
const GridCard = styled.div`
  width: 48%;
  height: 350px;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  box-shadow: -10px 0px 13px -7px #d9d9d9, 10px 0px 13px -7px #d9d9d9, 5px 5px 15px 5px #d9d9d9;
  padding: 10px;

  img {
    width: 50%;
    height: 230px;
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
  }

  &:hover {
    transform: scale(1.05);
    transition-duration: 0.5s;
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  flex-direction: column;
  justify-content: space-evenly;  
  padding: 10px;

  span {
    font-size: 24px;
    font-weight: 600;
    color: #FF5F1F;
    margin-bottom: 10px;
  }

  p {
    font-size: 24px;
    font-weight: 600;
    color: #000;
    margin-bottom: 10px;
  }
`

const UpperRow = styled.div`
  height: 230px;
  display: flex;
`

const LowerRow = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Buy = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #FF5F1F;
  margin-right: 10px;

  color: #fff;
  font-size: 22px;
  font-weight: 500;
  height: 40px;
  width: 160px;
  cursor: pointer;
`

const Sizes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 200px;
  height: 80px;
  margin-left: 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: #1f72a6;
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;

    height: 35px;
    width: 40px;
  }

  & >button:disabled {
    cursor: default;
    background-color: #d9d9d9;
    opacity: 0.6;
  }
`

export {
  Grid,
  GridCard,
  Info,
  UpperRow,
  LowerRow,
  Buy,
  Sizes
}