import { dataHelper } from './Graph'

it('formats socket data correctly for consumption by rechart', () => {
  let title = 'temp'
  let data = [55,78]
  let actualResult = dataHelper(data, title)
  let expectedResult = [
    {
      time: actualResult[0].time,
      temp: data[0]
    },
    {
      time: actualResult[1].time,
      temp: data[1]
    },
  ]

  expect(actualResult).toEqual(expectedResult)
})
