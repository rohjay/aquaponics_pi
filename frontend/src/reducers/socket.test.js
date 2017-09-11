import socket from './socket'

it('returns an array of the 10 latest results', () => {
  let arrayStart = [0,1,2,3,4,5,6,7,8,9]

  let state = {
    moisture: arrayStart,
    temp: arrayStart,
    ph: arrayStart,
  }

  let action = {
    type: 'SET_SOCKET',
    data: {
      moisture: 10,
      temp: 10,
      ph: 10,
    },
  }

  let actualResult = socket(state, action)
  
  let arrayEnd = [1,2,3,4,5,6,7,8,9,10]

  let expectedResult = {
    moisture: arrayEnd,
    temp: arrayEnd,
    ph: arrayEnd,
  }

  expect(actualResult).toEqual(expectedResult)
})
