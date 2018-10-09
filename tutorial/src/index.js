import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Game from './containers/Game'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)