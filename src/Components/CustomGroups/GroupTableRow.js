import React from 'react';

export default (props) => {
 
  const data = props.data;
  const avg = props.avg;
  const trend = props.trend;
  const stdDev = props.stdDev;
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.scores[0]}</td>
      <td>{data.scores[1]}</td>
      <td>{data.scores[2]}</td>
      <td>{data.scores[3]}</td>
      <td>{avg}</td>
      <td>{stdDev}</td>
      <td>{trend}</td>
    </tr>
  );
}