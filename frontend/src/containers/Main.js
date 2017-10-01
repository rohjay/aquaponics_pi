// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Jumbotron } from 'react-bootstrap'
import '../styles/containers/Main.css'
//import Video from '../components/Video'
import { Graph } from '../components/Graph'
import { SoilMoisture } from '../components/SoilMoisture'

type DataPoint = {
  time: number,
  data: number,
}

type Props = {
  moisture: Array<DataPoint>,
  temp: Array<DataPoint>,
  humidity: Array<DataPoint>,
}

class Main extends Component<Props> {
  render() {
    return (
      <Grid>
        <Row>
        <Jumbotron>
          <h1>Aquaponics Pi</h1>
        </Jumbotron>
        </Row>
        <Row>
          <SoilMoisture
            data={this.props.moisture} />
        </Row>
        <Row>
          <Graph
            title={'temp'}
            color={'#ff0000'}
            scale={'°F'}
            data={this.props.temp} />
        </Row>
        <Row>
          <Graph
            title={'humidity'}
            color={'#00FF00'}
            scale={'%'}
            data={this.props.humidity} />
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  moisture: state.socket.moisture,
  temp: state.socket.temp,
  humidity: state.socket.humidity,
})

const MainContainer = connect(
  mapStateToProps
)(Main)

export default MainContainer
