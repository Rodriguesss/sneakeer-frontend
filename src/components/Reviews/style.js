import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`

const Review = styled.div`
  width: 250px;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 20px;
  border-right: 1px solid #f2f2f2;

  img {
    width: 120px;
    height: 120px;
    border-radius: 60px;
    object-fit: cover;
    object-position: center;
    margin-top: 10px;
  }

  span {
    font-size: 22px;
    font-weight: 500;
    margin-top: 10px;    
  }

  p {
    font-size: 18px;
    font-style: italic;
    color: #1f72a6;

    margin-top: 20px;
  }

  &:last-child {
    border-right: none;
  }

  &:hover {
    box-shadow: -10px 0px 13px -7px #d9d9d9, 10px 0px 13px -7px #d9d9d9, 5px 5px 15px 5px #d9d9d9;
    z-index: 1;
    transition-duration: 0.5s;
  }
`

export {
  Wrapper,
  Review,
}