// PACKAGES
import React from 'react'
import { render } from 'react-dom'

// STYLES
import './assets/scss/main.scss'

// ROUTER
import AppRouter from './routers/AppRouter'

render(<AppRouter />, document.getElementById('app'))
