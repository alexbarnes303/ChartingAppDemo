import React from 'react';

export default (props) => {
 
  const avg = props.avg;
  const stdDev = props.stdDev;
  const trend = props.trend;
  
  return (
    <tr>
      <td>{avg}</td>
      <td>{stdDev}</td>
      <td>{trend}</td>
    </tr>
  );
}