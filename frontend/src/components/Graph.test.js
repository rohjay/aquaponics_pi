import { dataHelper } from './Graph'

it('formats socket data correctly for consumption by rechart', () => {
  let title = 'temp'
  let data = [{
    time: 0,
    data: 55,
  },{
    time: 1000,
    data: 78,
  }]
  let actualResult = dataHelper(data, title)
  let expectedResult = [
    {
      time: '18:00:00',
      [title]: data[0].data,
    },
    {
      time: '18:00:01',
      [title]: data[1].data,
    },
  ]

  expect(actualResult).toEqual(expectedResult)
})
