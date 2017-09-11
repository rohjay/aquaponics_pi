import React from 'react'
import moment from 'moment'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

// data comes in as an array of ints and must return as [{time: 10:32:01, temp: 78}]
const dataHelper = (data, title) => {
  let length = data.length - 1
  return data.map((value, index) => ({
      time: moment().subtract(length - index, 'seconds').format('HH:mm:ss'),
      [title]: value,
    })
  )
}

const Graph = (props) => (
  <LineChart width={730} height={250} data={dataHelper(props.data, props.title)}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <XAxis
      tick={false}
      scale='utcTime'
      dataKey='time'
      domain={['auto','auto']} />
    <YAxis
      type='number'
      scale='linear'
      dataKey={props.title}
      unit={props.scale}
      domain={['auto','auto']} />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Line
      type='monotone'
      isAnimationActive={false}
      animationEasing={'ease'}
      dataKey={props.title}
      stroke={props.color} />
  </LineChart>
)

export { Graph, dataHelper }
