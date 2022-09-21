import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  > form {
    width: 350px;
    max-width: 90%;
    margin: 0px auto;
  }
`

export const FormTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;

  @media (min-width: 650px) {
    font-size: 50px;
  }
`

export const FormRow = styled.div`
  margin-bottom: 15px;
  > label {
    font-size: 16px;
    display: flex;
    align-items: center;
  }
`

export const FormError = styled.div`
  font-size: 14px;
  color: red;
  margin-left: 20px;
`

export const InputField = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 10px;
`
