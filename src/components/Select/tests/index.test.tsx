import React from 'react'
import 'jest-styled-components'
import Select from '..'
import { render } from 'utils/testUtils'

const { Option } = Select

describe('Select', () => {
  it('should render without error', () => {
    const { container } = render(
      <Select>
        <Option key='item_1' value='item_1'>item 1</Option>
        <Option key='item_2' value='item_2'>item 2</Option>
      </Select>
    )
    expect(container).toMatchSnapshot()
  })
})