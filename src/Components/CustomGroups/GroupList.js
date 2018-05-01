import React from 'react';
import {ListGroup} from 'react-bootstrap';
import Group from './Group';

export default (props) => {
  let groups = props.groups.map((group, index) => { return <Group key={index} group={group} createGroup={props.createGroup}/>;
    });       
  return (
    <ListGroup>
      {groups}
    </ListGroup>
  )
}