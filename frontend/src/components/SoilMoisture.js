// @flow

import React from 'react'
import { Panel } from 'react-bootstrap'

type DataPoint = {
  time: number,
  data: number,
}

type Props = {
  data: Array<DataPoint>
}

const color = (dataArray: Array<DataPoint>) => {
  let dataPoint = dataArray[dataArray.length - 1]
  if (typeof dataPoint === 'undefined') {
    return 'default'
  }
  return (dataPoint.data === 1) ? 'success' : 'danger'
}

const message = (dataArray: Array<DataPoint>) => {
  let dataPoint = dataArray[dataArray.length - 1]
  if (typeof dataPoint === 'undefined') {
    return 'Awaiting data'
  }
  return (dataPoint.data === 1) ? 'Soil moisture looks good.' : 'Soil needs more water.'
}

const SoilMoisture = (props: Props) => (
  <Panel header={'Soil Moisture'} bsStyle={color(props.data)}>
    {message(props.data)}
  </Panel>
)

export { SoilMoisture }
