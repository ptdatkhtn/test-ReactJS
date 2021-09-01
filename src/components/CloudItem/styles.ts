import styled from 'styled-components'
import theme from 'themes'
import { List } from 'components'

const { Item } = List

export const Container = styled(Item)`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
    padding: ${theme.spacing.xs};
    margin-bottom: ${theme.spacing.xs};
    border-radius: 0.5rem;
    box-shadow: 0 3px 8px 0 rgb(0 0 0 / 3%);
    background-color: white;
    border: 1px solid transparent;
    transition: border 0.2s linear;
    :hover {
      border: 1px solid ${theme.color.grey2};
    }
  }
`
export const CloudName = styled.span`
  color: ${theme.color.primary1};
  font-size: ${theme.font.m};
`
export const CloudDescription = styled.span`
  color: ${theme.color.grey1};
  font-size: ${theme.font.xs};
`
