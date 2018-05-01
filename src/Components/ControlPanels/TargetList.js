import {MenuItem} from 'react-bootstrap';
import React, {Component} from 'react';

export default class TargetList extends Component {
  constructor(props) {
  	super(props);
  	this.handleTargetSelect = this.handleTargetSelect.bind(this);
  }

  handleTargetSelect (target) {
  	this.props.selectTarget (target);
  	
  }
render () {
	let index = this.props.index;
	let target = this.props.target; 
  return (
    <MenuItem key={index} onSelect={ this.handleTargetSelect.bind(this, target)}> {target} </MenuItem>
  	);
  }
}