import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class TimeChart extends Component {
  constructor(props) {
    super(props);

    // this.updateCharts = this.updateCharts.bind(this);
    this.state = {
      series: [0],
      options: {
        chart: {
          height: 400,
          type: "radialBar",
          toolbar: {
            show: true,
          },
        },
        plotOptions: {
          radialBar: {
            // startAngle: -135,
            // endAngle: 225,
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
              strokeWidth: "80%",
              margin: 0, // margin is in pixels
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
                fontSize: "36px",
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
        labels: [""],
      },
    };
  }
  componentDidMount() {
    this.updateSeries();
  }
  updateSeries() {
    // const series = [4.17, 8.34, 12.51, 16.68, 20.85];
    const rate = 4.17;
    const newSetOfRate = [];
    for (let i = 1; i <= 24; i++) {
      newSetOfRate.push(rate * i);
    }
    console.log(newSetOfRate);
    let hoursOnChart = 1000 * 60 * 60;
    for (let i = 0; i < newSetOfRate.length; i++) {
      setTimeout(() => {
        this.setState({ series: [newSetOfRate[i]] });
        console.log(newSetOfRate[i]);
      }, i * hoursOnChart);
    }
  }
  render() {
    // this.updateSeries();
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
        />
      </div>
    );
  }
}
