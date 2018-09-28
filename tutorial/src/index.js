import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Game from './containers/Game'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import { createStore } from 'redux'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)