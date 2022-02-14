import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  padding: 40px 0;
`

const Filters = styled.div`
  width: 30%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-color: lightblue; */
`

const Vertical = styled.div`
  width: 1px;
  height: 100vh;
  background-color: #f2f2f2;
`

const ProductGrid = styled.div`
  width: 70%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-color: lightgray; */
`

export {
  Container,
  Filters,
  Vertical,
  ProductGrid,
}