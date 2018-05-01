import React from 'react';

export default (props) => {
 
  const data = props.data;
  const group = props.group;
  return (
    <tr>
      <td>{group}</td>
      <td>{data[0]}</td>
      <td>{data[1]}</td>
      <td>{data[2]}</td>
      <td>{data[3]}</td>
    </tr>
  );
}


