import React, { Component } from 'react'

export default class HistoryEvents extends Component {
  constructor(props)
  {
    super(props);

    this.events = this.props.events;
    this.max = parseInt(this.props.max);

    if(this.max < this.events.length)
    {
      this.events = this.events.slice(-this.max);
    }
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
          <tr>
            <th>Value</th>
            <th>Date</th>
          </tr>
          </thead>
          <tbody>
            {this.events.map((event) => <tr key={event.id}><td>{event.value}</td><td>{new Date(event.date).toString()}</td></tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}
