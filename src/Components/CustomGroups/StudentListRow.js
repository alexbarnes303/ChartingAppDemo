import {Checkbox} from 'react-bootstrap';
import React from 'react';
export default (props) => {
 
  const data = props.data;  
  const filters = props.filters;
 
  console.log()
  return (         
    <tr>       
      <td width='40'> 
        <Checkbox checked={filters.has(data.ID)} style={{margin:'1px'}} key={filters} onChange={props.handleDataSelect.bind(this, data.ID)}>     
        </Checkbox> 
      </td>      
      <td>{data.ID}</td>    
      <td>{data.name}</td>   
    </tr> 
  );
}