import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class TimeChart extends Component {
  constructor(props) {
    super(props);

    this.updateSeries = this.updateSeries.bind(this);
    this.state = {
      series: [0],
      options: {
        chart: {
          height: 500,
          type: "radialBar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          radialBar: {
            // startAngle: -135,
            // endAngle: 225,
            hollow: {
              margin: 0,
              size: "60%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24,
              },
            },
            track: {
              background: "#fff",
              strokeWidth: "70%",
              margin: 0,
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },

            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: "#575555",
                fontSize: "17px",
              },
              value: {
                formatter: function (val) {
                  return Math.trunc((val / 100) * 24);
                },
                color: "#111",
                fontSize: "30px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#c6a1e5"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Hours Spent"],
      },
    };
  }
  componentDidMount() {
    this.updateSeries();
  }
  updateSeries() {
    // Create an array
    const rate = 4.17;
    const newSetOfRate = [];
    for (let i = 0; i <= 24; i++) {
      newSetOfRate.push(rate * i);
    }
    console.log(newSetOfRate);

    //Loop through the array at intervals
    let hoursOnChart = 1000 * 60 * 60;
    for (let i = 0; i < newSetOfRate.length; i++) {
      setTimeout(() => {
        this.setState({ series: [newSetOfRate[i]] });
        console.log(newSetOfRate[i]);
      }, i * hoursOnChart);
    }
  }
  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
        />
        {/* <button onClick={this.updateSeries}>Update!</button> */}
      </div>
    );
  }
}
