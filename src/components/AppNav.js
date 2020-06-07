import React, { Component,useState } from 'react';


import AngularTut from  './AngularTut';

import ReactTut from  './ReactTut';

import BasicJava from  './BasicJavaTut';

import AdvancedJava from './AdvancedJavaTut';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';



class AppNav extends Component {

  constructor(props){
    super(props)
   this.state = {isOpen : "false"};
  }


toggle  = (event) =>{
  this.setState({isOpen: !this.state.isOpen});
}


  render(){

    return(


      <Router>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">TechStackGuru</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Tutorials
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>
                    UI Technologies
                </DropdownItem>
                <DropdownItem>
                    <NavLink href="#"><Link to="/angular">Angular</Link></NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink href="#"><Link to="/reactt">React</Link></NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>
                    Server Tehchnologies
                </DropdownItem>

                <DropdownItem>
                  <NavLink href="#"><Link to="/basicJava">Basic Java</Link></NavLink>
                 </DropdownItem>

                <DropdownItem>
                     <NavLink href="#"><Link to="/advancedJava">Advanced Java</Link></NavLink>

                </DropdownItem>

                <DropdownItem>
                    Data Structures
                </DropdownItem>


              </DropdownMenu>
            </UncontrolledDropdown>



            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Examples
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>
                    UI Technologies
                </DropdownItem>
                <DropdownItem >
                  <NavLink href="#"><Link to="/angular">Angular</Link></NavLink>
                </DropdownItem>
                <DropdownItem>
                    React
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>
                    Server Tehchnologies
                </DropdownItem>

                <DropdownItem>
                    Basic Java
                </DropdownItem>

                <DropdownItem>
                    Advanced Java
                </DropdownItem>

                <DropdownItem>
                    Data Structures
                </DropdownItem>


              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>
        </Collapse>
      </Navbar>


      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/angular">
          <AngularTut />
        </Route>
        <Route path="/reactt">
          <ReactTut />
        </Route>

        <Route path="/basicJava">
          <BasicJava />
        </Route>

        <Route path="/advancedJava">
          <AdvancedJava />
        </Route>


        <Route path="/">
          <Home />
        </Route>
    </Switch>
    </Router>

    );


  }


}

export default AppNav;


function Home() {
  return <h2>You have reached the home page.</h2>;
}
