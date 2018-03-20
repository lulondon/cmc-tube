import React, { Component } from 'react'

import LineStatus from './LineStatus'

class Tube extends Component {
  render() {
    const {
      data,
      loading
    } = this.props

    return (
      <div>
        {
          loading
            ? <div className='loader' />
            : <div className='null-loader' />
        }
        <div className='list-group'>
          {data.map(line => <LineStatus key={line.id} line={line} />)}
          <div className='list-group-item tfl-attribution-footer px-4'>Powered by TfL Open Data</div>
        </div>
      </div>
    )
  }
}

export default Tube
