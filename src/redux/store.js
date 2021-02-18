import { counterReducer } from './reducer'
import { createStore } from 'redux'

const store = createStore(counterReducer)

export default store