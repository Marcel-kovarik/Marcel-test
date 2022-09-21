import React from 'react'

import {
  ButtonWrapper
} from './styles'

export const Button = (props) => {
  const { onClick, width } = props
  return (
    <ButtonWrapper width={width} onClick={onClick}>
      {props.children}
    </ButtonWrapper>
  )
}