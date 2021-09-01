import React from 'react'
import 'jest-styled-components'
import List from '..'
import { render, fixMatchMedia } from 'utils/testUtils'

fixMatchMedia()

describe('List', () => {
  it('should render without error', () => {
    const { container } = render(
      <List>
        <div key='item_1'>item 1</div>
      </List>
    )
    expect(container).toMatchSnapshot()
  })
})