import React, { Component } from "react";
import max from "lodash/max";
import { createBasisPolynoms, interpolateByLagrange } from "./calc";
import { toFn } from "./utils";
import Chart from "./Chart";

import "react-vis/dist/style.css";

const xNums = [0.015, 0.681, 1.342, 2.118, 2.671];
const yNums = [-2.417, -3.819, -0.642, 0.848, 2.815];

function computeLagrangeFn() {
  const polynoms = createBasisPolynoms(xNums);

  const iterpolatedLagrangePolynom = interpolateByLagrange(polynoms, yNums);

  return toFn(iterpolatedLagrangePolynom);
}

class App extends Component {
  lagrangeFn = computeLagrangeFn();

  render() {
    const renderData = xNums.map((it, index) => ({ x: it, y: yNums[index] }));
    return (
      <React.Fragment>
        <div className="charts-container">
          <Chart data={renderData} />
          <Chart fn={this.lagrangeFn} maxX={max(xNums)} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
