import React from 'react'
import 'jest-styled-components'
import Checkbox from '..'
import { render } from 'utils/testUtils'

describe('Checkbox', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <>
        <Checkbox>Label</Checkbox>
        <Checkbox disabled>Label</Checkbox>
        <Checkbox checked>Label</Checkbox>
        <Checkbox checked disabled>
          Label
        </Checkbox>
      </>
    )
    expect(container).toMatchSnapshot()
  })
})