import styled, { css } from 'styled-components'

export const ButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%);
  border-radius: 10px;
  color: white;
  font-weight: 500;
  transition: all 0.3s linear;
  font-size: 14px;
  padding: 10px;
  outline: 0;
  max-width: 100%;
  border: none;

  @media (min-width: 400px) {
    font-size: 20px;
    padding: 16px;
  }

  ${({ width }) => width && css`
    width: ${width};
  `}

  &:hover{
    cursor: pointer;
    background: linear-gradient(90deg, #8456EC 3.25%, #8e5e95 100%);
  }
`

