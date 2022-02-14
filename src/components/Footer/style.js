import styled from 'styled-components'

const StyledFooter = styled.footer`
  width: 100vw;
  height: 360px;
  background-color: #404040;

  display: flex;
  flex-direction: column;

  padding: 40px 100px;
`
const Upper = styled.div`
  width: 100%;
  height: 199px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Separator = styled.div`
  height: 1px;
  background-color: #d9d9d9;
  display: flex;

`

const Lower = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

const InfoBox = styled.div`
  height: 190px;
  display: flex;
  flex-direction: column;
  
  & >h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
    color: #fff;
  }

  & >p {
    font-size: 14px;
    margin-bottom: 8px;
    color: #d9d9d9;
  }
`

const Copyright = styled.span`
  font-size: 18px;
  color: #d9d9d9; 
`

const Flags = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-evenly;

  & >img {
    width: 200px;
  }
`

const SocialBox = styled.div`
  height: 190px;
  display: flex;
  flex-direction: column;
  
  & >h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
    color: #fff;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .wrapper>ion-icon{
    font-size: 24px;
    color: #fff;
  }
`

export {
  StyledFooter,
  Upper,
  Separator,
  Lower,
  InfoBox,
  Copyright,
  Flags,
  SocialBox,
}