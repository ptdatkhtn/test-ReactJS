import React from 'react'
import 'jest-styled-components'
import Spin from '..'
import { render } from 'utils/testUtils'

describe('Spin', () => {
  it('should render without error', () => {
    const { container } = render(
      <Spin tip='spinning'/>
    )
    expect(container).toMatchSnapshot()
  })
})