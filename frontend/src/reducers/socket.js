// @flow

type DataPoint = {
  time: number,
  data: number,
}

type State = {
  moisture: Array<DataPoint>,
  temp: Array<DataPoint>,
  humidity: Array<DataPoint>,
}

type Action = {
  type: string,
  data: {
    time: number,
    moisture: number,
    temp: number,
    humidity: number,
  },
}

const defaultState = {
  moisture: [],
  temp: [],
  humidity: [],
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
      let humidityDataPoint = createDataPoint(action.data.time, action.data.humidity)
      return Object.assign({}, state, {
        moisture: keepLatest(state.moisture, moistureDataPoint),
        temp: keepLatest(state.temp, tempDataPoint),
        humidity: keepLatest(state.humidity, humidityDataPoint),
      })
    default:
      return state
  }
}

export default socket
