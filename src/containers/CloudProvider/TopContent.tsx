import React from 'react'
import { Select, Tooltip } from 'components'
import { InfoCircleFilled } from '@ant-design/icons'

import logo from 'assets/aiven-logo.png'
import { TopContainer, LogoContainer, HeaderLabel, RegionContainer, CheckboxWrapper, SelectWrapper, TopContentWrapper } from './styles'
import { ITopContentComp } from 'interface'


const { Option } = Select

const TopContent = ({ regions, onChangeRegion, onNearby }: ITopContentComp) => {
  const getTooltipText = () => {
    return navigator.geolocation ? 'The distance calculated based on your local location' : 'Geolocation is not supported by this browser or you can try to turn on in your browser setting.'
  }

  const onChangeCheckboxDistance = (event: { target: { checked: boolean } }) => {
    onNearby(event.target.checked)
  }

  const renderRegions = () => {
    return regions.map(item => {
      return <Option key={item} value={item}>{item}</Option>
    })
  }

  return (
    <>
      <TopContainer>
        <LogoContainer src={logo} alt='Aiven logo' />
        <HeaderLabel>Aiven Cloud Provider</HeaderLabel>
      </TopContainer>
      <TopContentWrapper>
        <RegionContainer>
          <span>Select Region</span>
          <SelectWrapper defaultValue='all' onChange={onChangeRegion}>
            <Option value='all'>All</Option>
            {renderRegions()}
          </SelectWrapper>
        </RegionContainer>
        <CheckboxWrapper disabled={!navigator.geolocation} onChange={onChangeCheckboxDistance}>Near your location</CheckboxWrapper>
        <Tooltip placement='top' title={getTooltipText}>
          <InfoCircleFilled />
        </Tooltip>
      </TopContentWrapper>
    </>
  )
}

export default TopContent