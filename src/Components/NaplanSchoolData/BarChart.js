import React from 'react';
import {Bar} from 'react-chartjs-2';

export default (props) => {

  const filteredData = props.data; 
  const groupData = [];
  const groups = Object.keys(filteredData);
  groups.forEach((key, i) => {
  	groupData.push(filteredData[key]);
  });
 
  const dataColors = [
    '#d3d3d3', 
    '#dd7788',
    '#667799',
    '#7a9460'
  ];
  
  const dataSets = [];
  let dataSet = {};
  groupData.forEach((group, i) => {
  	dataSet = {
  		label: groups[i],
  		backgroundColor: dataColors[i],
  		borderColor: dataColors[i],
  		borderwidth: 1,
  		data: group
  	}
  	dataSets.push(dataSet);
  });

	const chartData = {
    labels: ['2013', '2014', '2015', '2016'],
    datasets: dataSets
  }

  return (
    <div>
      <h2>{props.subject}</h2>
      <Bar
        data={chartData}
        width={100}
        height={90}
        options={{
        maintainAspectRatio:false,
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              suggestedMin: 60
            }
          }]
        }
      }}
      />
    </div>
  );
}


