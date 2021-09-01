import { render as rtlRender } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'themes'

const render = (ui: JSX.Element, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper as React.FC, ...renderOptions })
}

const fixMatchMedia = () => {
  window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    }
  }
}

export * from '@testing-library/react'
// override render method from @testing-library/react
export { render, fixMatchMedia }
