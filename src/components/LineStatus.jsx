import React, { Component } from 'react'

// import LineStatusText from '../components/LineStatusText'

import { icon, textColour, colours } from '../lib/line'

class LineStatus extends Component {
  render() {
    // const statuses = this.props.line.lineStatuses.map((status, i) =>
    // <LineStatusText status={status} key={i} mode={this.props.line.modeName} />)

    return (
      <div className='list-group-item d-flex justify-content-between p-2'
        style={{
          backgroundColor: colours[this.props.line.id],
          color: textColour(this.props.line)
        }}
      >
        <p className='lead p-2 m-0'>{this.props.line.name}</p>
        <div className='p-2'>{icon(this.props.line)}</div>
      </div>
    )
  }
}

export default LineStatus

/* Props from the old material-ui element */
/*                                        */
// primaryText={this.props.line.name}
// rightIcon={icon(this.props.line)}
// initiallyOpen={false}
// disabled={this.props.line.lineStatuses[0].statusSeverity === 10}
// autoGenerateNestedIndicator={true}
// primaryTogglesNestedList={true}
// nestedItems={this.props.line.lineStatuses[0].statusSeverity !== 10 ? statuses : undefined}
