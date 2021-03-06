import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  height: ${ ({product}) => product ? '300px' : '600px'};
  background-color: lightcoral;
  background-image: url('https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  z-index: 1;
`

const BannerText = styled.div`
  display: ${ ({product}) => product && 'none'};
  width: 80vw;

  & >h2 {
    font-size: 48px;
    font-weight: 700;
    color: #FF5F1F;
    margin-bottom: 30px;
  }

  & >p {
    width: 300px;
    font-size: 24px;
    color: #fff;
  }
`
const Hover = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(115,115,115,0.6) 0%, rgba(217,217,217,0.6) 100%);

  padding: 160px 100px 100px 100px;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1;
`

export {
  Background,
  BannerText,
  Hover,
}