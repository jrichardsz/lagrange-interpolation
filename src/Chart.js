import React from 'react';
import { HorizontalGridLines, LineSeries, XAxis, XYPlot, YAxis } from 'react-vis';
import range from 'lodash/range';
import 'react-vis/dist/style.css'

function generateDataSet(fn, step = 0.1, max = 6) {
  return range(0, max, step)
    .map(x => ({x: x, y: fn(x)}));
}

export default ({fn, data}) => {
  const dataSet = data ? data : generateDataSet(fn);

  return (
    <XYPlot
      width={300}
      height={300}>
      <HorizontalGridLines/>
      <LineSeries
        data={dataSet}/>
      <XAxis/>
      <YAxis/>
    </XYPlot>
  );
};
