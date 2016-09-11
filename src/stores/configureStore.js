import { createStore } from 'redux'
import rootReducer from '../reducers/todo'

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer, preloadedState)

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers/todo', () => {
  //     const nextReducer = require('../reducers/todo').default
  //     store.replaceReducer(nextReducer)
  //   })
  // }

  return store
}
