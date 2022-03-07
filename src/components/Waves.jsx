import React from "react";
import ReactDOM from "react-dom";
import Wave from "react-wavify";
import "../index.css";

export default function Waves() {
  return (
    <div id="wave">
      <Wave
        fill="#fad263"
        paused={false}
        options={{
          height: 20,
          amplitude: 50,
          speed: 0.1,
          points: 4,
        }}
      />
    </div>
  );
}
ReactDOM.render(<Waves />, document.getElementById("root"));
