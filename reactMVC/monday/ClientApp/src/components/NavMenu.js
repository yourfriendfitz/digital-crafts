import React, { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import * as Palette from "./Palette";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { connect } from "react-redux";

const Text = styled.span`
  color: ${Palette.Text};
`;

const TextDark = styled.span`
  color: ${Palette.Text};
`;

const NavMenu = props => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            <span aria-label="none" role="img">
              <TextDark>Book Barn</TextDark>
              📚
            </span>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={!collapsed}
            navbar
          >
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  <Text>Home</Text>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/books">
                  <Text>Books</Text>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/books/add">
                  <Text>Utilities</Text>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/cart">
                  <Text>
                    Cart ({props.cart.length})
                  </Text>
                </NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart // props.count
  };
};

export default connect(mapStateToProps)(NavMenu);
