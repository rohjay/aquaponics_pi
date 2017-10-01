// @flow

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

import './styles/index.css'
import MainContainer from './containers/Main'

render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('root')
)
