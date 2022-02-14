import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  padding: 40px 0;
`

const Vertical = styled.div`
  width: 1px;
  height: 100vh;
  background-color: #f2f2f2;
`

const ProductGrid = styled.div`
  width: 900px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export {
  Container,
  Vertical,
  ProductGrid,
}