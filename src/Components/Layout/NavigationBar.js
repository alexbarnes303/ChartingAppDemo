import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import React from 'react';

export default (props) => {

  return (  
    <Navbar fluid default collapseOnSelect>     
      <Navbar.Header >
        <Navbar.Brand >
          <a href="#" ><b>EDUCATON DATA App</b></a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>                
      <Navbar.Collapse>      
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem eventKey={1} ><b> NAPLAN School Data </b></NavItem>
          </IndexLinkContainer>   
        </Nav>                            
        <Nav>
          <LinkContainer to="/SchoolComparison">
            <NavItem eventKey={2} ><b> School Comparison </b></NavItem>
          </LinkContainer> 
        </Nav> 
        <Nav>
          <LinkContainer to="/CustomGroups">
            <NavItem eventKey={3} ><b> Student Data & Custom Groups </b></NavItem>
          </LinkContainer>   
        </Nav>        
      </Navbar.Collapse>  
    </Navbar> 
  );
}

  