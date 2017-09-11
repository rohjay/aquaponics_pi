const defaultState = {
  moisture: [],
  temp: [],
  ph: [],
}

const keepLatest = (oldArray, newArray) => (
  oldArray.concat(newArray).slice(-10)
)

const socket = (state = defaultState, action) => {
  switch(action.type){
    case 'SET_SOCKET':
      return Object.assign({}, state, {
        moisture: keepLatest(state.moisture, action.data.moisture),
        temp: keepLatest(state.temp, action.data.temp),
        ph: keepLatest(state.ph, action.data.ph),
      })
    default:
      return state
  }
}

export default socket
