// @flow

type DataPoint = {
  time: number,
  data: number,
}

type State = {
  moisture: Array<DataPoint>,
  temp: Array<DataPoint>,
  ph: Array<DataPoint>,
}

type Action = {
  type: string,
  data: {
    time: number,
    moisture: number,
    temp: number,
    ph: number,
  },
}

const defaultState = {
  moisture: [],
  temp: [],
  ph: [],
}

const createDataPoint = (time: number, data: number) => ({
  time,
  data,
})

const keepLatest = (oldArray: Array<DataPoint>, newDataPoint: DataPoint) => (
  oldArray.concat(newDataPoint).slice(-10)
)

const socket = (state: State = defaultState, action: Action) => {
  switch(action.type){
    case 'SET_SOCKET':
      let moistureDataPoint = createDataPoint(action.data.time, action.data.moisture)
      let tempDataPoint = createDataPoint(action.data.time, action.data.temp)
      let phDataPoint = createDataPoint(action.data.time, action.data.ph)
      return Object.assign({}, state, {
        moisture: keepLatest(state.moisture, moistureDataPoint),
        temp: keepLatest(state.temp, tempDataPoint),
        ph: keepLatest(state.ph, phDataPoint),
      })
    default:
      return state
  }
}

export default socket
