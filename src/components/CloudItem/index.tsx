import React from 'react'

import { Container, CloudName, CloudDescription } from './styles'
import { ICloudItemComp } from 'interface'

const CloudItem = ({
  key,
  value,
  description,
  name,
  onClick,
  ...otherProps
}: ICloudItemComp) => {
  const onClickHandler = () => {
    onClick(value)
  }

  return (
    <Container onClick={onClickHandler} {...otherProps}>
      <CloudName>{name}</CloudName>
      <CloudDescription>{description}</CloudDescription>
    </Container>
  )
}

export default CloudItem