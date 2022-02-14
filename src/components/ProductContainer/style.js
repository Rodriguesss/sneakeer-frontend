import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 40px;
  padding-bottom: 60px;

  /* background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(217,217,217,0.9) 100%),
  url('https://img.freepik.com/vetores-gratis/conjunto-de-calcados-esportivos-ou-tenis-em-diferentes-pontos-de-vista_1284-45609.jpg?w=826'); */

  & >h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 60px;
  }
`
export {
  StyledMain,
}