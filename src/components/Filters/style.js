import styled from "styled-components";

const Filters = styled.div`
  width: 300px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 24px;
    font-weight: 500;
  }
`

const Horizontal = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f2f2f2;
  margin: 10px 0;
`

const FilterForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
`

const Title = styled.span`
  align-self: flex-start;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
`

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

const Label = styled.label`
  font-size: 18px;
  font-weight: 400;
  margin-left: 10px;
`

const Input = styled.input`

  &[type="checkbox"]{
    height: 15px;
    width: 15px;
  }
`

const Select = styled.select`
  align-self: center;
  width: 50%;
  text-align: center;
  margin-bottom: 15px;
`

const SubmitButton = styled.button`
  align-self: center;
  width: 50%;
  height: 40px;
  cursor: pointer;
  border: none;

  background-color: #1f72a6;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`

export { 
  Filters,
  Horizontal,
  FilterForm,
  Wrap,
  Title,
  Label,
  Input,
  Select,
  SubmitButton,
}