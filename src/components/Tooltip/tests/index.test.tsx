import React from 'react'
import 'jest-styled-components'
import Tooltip from '..'
import { render } from 'utils/testUtils'

describe('Tooltip', () => {
  it('should render without error', () => {
    const { container } = render(
      <Tooltip placement='top' title='tooltip'/>
    )
    expect(container).toMatchSnapshot()
  })
})