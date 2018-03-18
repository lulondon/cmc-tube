import React, { Component } from 'react'
import axios from 'axios'

import Tube from '../ui/Tube'

import { TflAppId, TflApiKey } from '../../../config/config.json'

class ContainerTube extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      error: false,
      loading: true
    }
  }

  loadData() {
    let component = this // eslint-disable-line prefer-const
    axios.get('https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail,tram/status', {
      params: {
        app_id: TflAppId,
        app_key: TflApiKey
      }
    })
      .then((response) => {
        component.setState({
          data: response.data,
          loading: false
        })
      })
      .catch(() => {
        this.setState({ error: true })
      })
  }

  componentDidMount() {
    this.loadData()
    this.timer = setInterval(() => {
      this.loadData()
    }, 120000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const {
      data,
      error,
      loading
    } = this.state

    return (
      <Tube
        data={data}
        error={error}
        loading={loading}
      />
    )
  }
}

export default ContainerTube
