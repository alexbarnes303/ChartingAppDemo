import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';

export default class Groups extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    this.props.createGroup(this.props.group)
  }

  render() {
    return (  
      <ListGroupItem onClick={this.handleSelect}>
        {this.props.group.groupName}
      </ListGroupItem>     
    );
  }
}