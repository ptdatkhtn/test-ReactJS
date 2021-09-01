import React from 'react'
import 'jest-styled-components'
import CloudItem from '..'
import { render, fireEvent, screen } from 'utils/testUtils'

describe('Cloud Item', () => {
  it('should match snapshot and trigger click function', () => {
    const mockOnClick = jest.fn()
    const { container } = render(
      <>
        <CloudItem data-testid='cloud_item' value='amazon' description='cloud description' name='cloud name' onClick={mockOnClick}/>
      </>
    )
    
    expect(container).toMatchSnapshot()
    expect(mockOnClick).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByTestId('cloud_item'))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})