import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/todo'
import configureStore from './stores/configureStore'
import './styles/todo.css'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-container')
)
