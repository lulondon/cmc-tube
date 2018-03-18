import React, { Component } from 'react'

import LineStatus from './LineStatus'

class Tube extends Component {
  render() {
    const {
      data,
      loading
    } = this.props

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 col-lg-6 offset-lg-3'>
            <div className='jumbotron jumbotron-fluid'>
              <div className='container'>
                <h1 className='display-4'>Tube Status</h1>
                <p className='m-0'>For more information about the London Underground and other TfL services, please visit <a href='https://tfl.gov.uk/'>tfl.gov.uk</a>.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-lg-6 offset-lg-3'>
            {
              loading
                ? <div className='spinner'><div className="bounce1"></div><div className="bounce2"></div><div className="bounce3"></div></div>
                : <div className='list-group'>
                    {
                      data.map(line => <LineStatus key={line.id} line={line} />)
                    }
                    <div className='list-group-item tfl-attribution-footer px-4'>Powered by TfL Open Data</div>
                  </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Tube
