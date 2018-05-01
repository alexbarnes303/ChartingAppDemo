import React from 'react';
import {Line} from 'react-chartjs-2';

export default (props) => {
 
  const filteredData = props.data; 
  const groupData = [];
  const groups = Object.keys(filteredData);
  groups.forEach((key, i) => {
  	groupData.push(filteredData[key]);
  });
 
  const dataColors = [
    '#f2e090',
    '#dd7788',
    '#667799',
    '#7a9460',
    '#dd9977',
    '#665566'
  ];
  const dataSets = [];
  let dataSet = {};
  groupData.forEach((group, i) => {
  	dataSet = {
  		label: groups[i],		
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
      <Line
        data={chartData}
        width={100}
        height={50}
        options={{
          elements: {
            line: {
              tension: 0
            }
          },
          maintainAspectRatio: true,
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                suggestedMin: 60,
                suggestedMax: 80
              }
            }]
          }
        }}
      />
    </div>
  );
}


