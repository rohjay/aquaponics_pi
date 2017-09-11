import { createStore, applyMiddleware } from 'redux'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client'
import reducers from './reducers/main'

let socket = io('http://localhost:3000')
let socketIoMiddleware = createSocketIoMiddleware(socket, "action/")

let store = createStore(reducers, applyMiddleware(
	socketIoMiddleware
))

// print to console
store.subscribe(()=>{
  console.log(store.getState())
});

export default store
