import './storybook.css'

import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { configure, addDecorator, setAddon } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { theme } from '../src/design'

const Container = styled.div`
  padding: 20px
`

addDecorator(withKnobs)
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <div style={{ padding: '20px' }}>
      {story()}
    </div>
  </ThemeProvider>
  )
)

function loadStories () {
  const context = require.context('../src', true, /\.story\.js$/)
  context.keys().forEach((filename) => context(filename))
}

configure(loadStories, module)
