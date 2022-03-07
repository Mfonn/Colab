import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class TimeChart extends Component {
  constructor(props) {
    super(props);

    this.updateSeries = this.updateSeries.bind(this);
    this.state = {
      series: [0],
      options: {
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%",
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
              strokeWidth: "50%",
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
                show: false,
                color: "#575555",
                fontSize: "17px",
              },
              value: {
                formatter: function (val) {
                  return Math.trunc((val / 100) * 24);
                },
                color: "#343f56",
                fontSize: "3rem",
                show: true,
              },
            },
          },
        },
        title: {
          text: "Hours spent online",
          align: "center",
          margin: 10,
          offsetY: 30,
          style: {
            fontSize: "1.2rem",
            color: "#343f56",
            fontWeight: 700,
          },
        },
        fill: {
          type: "gradient",
          colors: ["#343f56"],
          // gradient: {
          //   shade: "dark",
          //   type: "horizontal",
          //   shadeIntensity: 0.5,
          //   // gradientToColors: ["rgba(255, 197, 6, 0.904)"],
          //   inverseColors: true,
          //   opacityFrom: 1,
          //   opacityTo: 1,
          //   stops: [0, 100],
          // },
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
          height="300px"
          width="100%"
        />
        {/* <button onClick={this.updateSeries}>Update!</button> */}
      </div>
    );
  }
}
