// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row } from 'react-bootstrap'
import '../styles/containers/Main.css'
import Video from '../components/Video'
import { Graph } from '../components/Graph'

type DataPoint = {
  time: number,
  data: number,
}

type Props = {
  moisture: Array<DataPoint>,
  temp: Array<DataPoint>,
  ph: Array<DataPoint>,
}

class Main extends Component<Props> {
  render() {
    return (
      <Grid>
        <Row>
          <Video
            title={'Live Stream'}
            embedId={'7U7ijVPuZ3Q'} />
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
            title={'moisture'}
            color={'#0000FF'}
            scale={'%'}
            data={this.props.moisture} />
        </Row>
        <Row>
          <Graph
            title={'pH'}
            color={'#00FF00'}
            scale={'pH'}
            data={this.props.ph} />
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  moisture: state.socket.moisture,
  temp: state.socket.temp,
  ph: state.socket.ph,
})

const MainContainer = connect(
  mapStateToProps
)(Main)

export default MainContainer
