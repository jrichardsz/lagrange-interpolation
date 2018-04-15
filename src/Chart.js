import React from 'react';
import { HorizontalGridLines, LineSeries, XAxis, XYPlot, YAxis } from 'react-vis';

import 'react-vis/dist/style.css'

function generateDataSet(fn, step = 0.1, max = 6) {
  const data = [];
  for (let i = 0; i < max; i += step) {
    data.push({x: i, y: fn(i)})
  }
  return data;
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
