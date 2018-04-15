import React, { Component } from 'react';
import { createBasisPolynoms, interpolateByLagrange } from "./calc";
import { toFn } from "./utils";
import Chart from "./Chart";

import 'react-vis/dist/style.css'

const xNums = [0.351, 0.867, 3.315, 5.013, 6.432];
const yNums = [-0.572, -2.015, -3.342, -5.752, -6.911];

function computeLagrangeFn() {
  const polynoms =
    createBasisPolynoms(xNums);

  const iterpolatedLagrangePolynom =
    interpolateByLagrange(polynoms, yNums);

  return toFn(iterpolatedLagrangePolynom);
}

class App extends Component {
  lagrangeFn = computeLagrangeFn();


  render() {
    const renderData = xNums
      .map((it, index) => ({x: it, y: yNums[index]}));
    return (
      <React.Fragment>
        <div className="charts-container">
          <Chart data={renderData}/>
          <Chart fn={this.lagrangeFn}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
