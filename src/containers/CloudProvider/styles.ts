import styled from 'styled-components'
import theme from 'themes'
import { Select, Checkbox, List } from 'components'

export const ListContainer = styled(List)`
  && {
    padding: 1.2rem;
    padding-top: 0rem;
    overflow: auto;
    max-height: calc(100vh - 18rem);
  }
`
export const TopContainer = styled.header`
  background-color: ${theme.color.primary1};
  padding: ${theme.spacing.m};
`
export const TopContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${theme.spacing.m};
`
export const LogoContainer = styled.img`
  max-width: 36rem;
  max-height: 3.6rem;
`
export const HeaderLabel = styled.h1`
  && {
    font-size: 2.8rem;
    font-weight: normal;
    color: white;
    margin-bottom: 0;
  }
`
export const RegionContainer = styled.div`
  margin-right: ${theme.spacing.m};
`
export const DistanceContainer = styled.div``
export const SelectWrapper = styled(Select)`
  && {
    width: 20rem;
    margin-left: ${theme.spacing.xs};
  }
`
export const CheckboxWrapper = styled(Checkbox)``
