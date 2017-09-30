import socket from './socket'

it('returns an array of the 10 latest results', () => {
  let arrayStart = []
  
  for (let i = 0; i < 10; i++) {
    arrayStart.push({
      time: i,
      data: i,
    })
  }

  let state = {
    moisture: arrayStart,
    temp: arrayStart,
    humidity: arrayStart,
  }

  let action = {
    type: 'SET_SOCKET',
    data: {
      time: 10,
      moisture: 10,
      temp: 10,
      humidity: 10,
    },
  }

  let actualResult = socket(state, action)
  
  let arrayEnd = []
  for (let i = 1; i <= 10; i++) {
    arrayEnd.push({
      time: i,
      data: i,
    })
  }

  let expectedResult = {
    moisture: arrayEnd,
    temp: arrayEnd,
    humidity: arrayEnd,
  }

  expect(actualResult).toEqual(expectedResult)
})
