import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class HistoryChart extends Component {
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
        this.options = {
        title: {
            text: this.props.title
        },
        series: [{
            name: this.props.xtitle,
            data: this.events.map((event) => event.value)
        }],
        xAxis: {
            categories: this.events.map((event) => event.date)
        },
        yAxis: {
            title: {
                text: this.props.xtitle
            }
        },
        }

        return (
            <div>
                <HighchartsReact highcharts={Highcharts} options={this.options} />
            </div>
        )
    }
}
