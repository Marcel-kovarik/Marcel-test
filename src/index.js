import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './router'
import { ThemeProvider } from './contexts/ThemeContext'
import theme from './theme.json'
import { EventProvider } from './contexts/EventContext' 

/**
 * Theme images
 */


const RouteApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <EventProvider>
        <Router />
      </EventProvider>
    </ThemeProvider>
  )
}

const wrapper = document.getElementById('root')
ReactDOM.render(<RouteApp />, wrapper)