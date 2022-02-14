import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #f2f2f2;
`

const Bigger = styled.div`
  height: 350px;
  width: 600px;
  display: flex;

  border-right: 1px solid #f2f2f2;
  padding: 10px;

  .text { 
    width: 290px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }

  p {
    font-size: 22px;
    font-weight: 500;
    margin-top: 40px;
  }

  img {
    width: 290px;
    object-fit: cover;
  }

  button {
    align-self: center;
    height: 40px;
    width: 200px;
    cursor: pointer;

    background-color: #1f72a6;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    border: none;
    margin-bottom: 40px;
  }

  &:hover {
    box-shadow: -10px 0px 13px -7px #d9d9d9, 10px 0px 13px -7px #d9d9d9, 5px 5px 15px 5px #d9d9d9;
    z-index: 1;
    transition-duration: 0.5s;
  }
`

const Smaller = styled.div`
  height: 350px;
  width: 400px;
  display: flex;

  padding: 10px;

  .text {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

  }

  span {
    font-size: 22px;
    font-weight: 500;
    margin-top: 40px;
  }

  button {
    align-self: center;
    border: none;
    height: 40px;
    width: 80%;
    cursor: pointer;

    color: #fff;
    background-color: #FF5F1F;
    font-size: 18px;
    font-weight: 600;
    border: none;
    margin-bottom: 40px;
  }

  img {
    width: 50%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: -10px 0px 13px -7px #d9d9d9, 10px 0px 13px -7px #d9d9d9, 5px 5px 15px 5px #d9d9d9;
    z-index: 1;
    transition-duration: 0.5s;
  }
`

export {
  Wrapper,
  Bigger,
  Smaller,
}