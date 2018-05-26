import React from 'react';
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
} from 'reactstrap';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Folder App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Documents
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/aadhar" >Aadhar Card</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/passport" >Passport</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/pan" >PAN</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}


export default Header;
