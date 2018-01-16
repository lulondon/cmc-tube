import React, { Component } from 'react'
import axios from 'axios'

import LineStatus from './LineStatus'

export default class TubeStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tubeData: [],
      error: false,
      loading: true
    }
  }

  loadData() {
    let component = this // eslint-disable-line prefer-const
    axios.get('https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status', {
      params: {
        app_id: process.env.TFL_API_APP_ID,
        app_key: process.env.TFL_API_APP_KEY
      }
    })
      .then((response) => {
        component.setState({
          tubeData: response.data,
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
    const lines = this.state.tubeData.map((line, i) =>
      <LineStatus key={i} line={line} />)

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 col-lg-6 offset-lg-3'>
            <div className='jumbotron jumbotron-fluid'>
              <div className='container'>
                <h1 className='display-4'>Tube Status</h1>
                <p className='lead'>Explanation of what this page does, and how it can be useful to an audience.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-lg-6 offset-lg-3'>
            {
              this.state.loading
                ? <div className='spinner'><div className="bounce1"></div><div className="bounce2"></div><div className="bounce3"></div></div>
                : <div className='list-group'>{lines}</div>
            }
          </div>
        </div>
      </div>
    )
  }
}
