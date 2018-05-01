import React from 'react';
import NavigationBar from './NavigationBar';

export default (props) => {
   
  return (
    <div className='App'>
      <NavigationBar/>             
      <div style={{ borderRadius:'5px', margin:'30px', padding:'30px', border:'solid 2px grey', backgroundColor:'#FDFDFD'}} className='content'>      
        {props.children}     
      </div>
    </div>
  ); 
}

