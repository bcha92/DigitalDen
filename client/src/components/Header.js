import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <HomeNavLink exact to="/">
        <Title>TITLE</Title>
      </HomeNavLink>
      <NavMenu>
        {/* <CategoriesDropDown /> */}
        {/* <BrandDropDown /> */}
        <StyledNavLink exact to="/products">
          <List>Shop by Category</List>
          <List>Shop by Brand</List>
          <List>Shop All</List>
        </StyledNavLink>
      </NavMenu>
    </>
  );
};

const HomeNavLink = styled(NavLink)`
  text-decoration: none;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  color: black;
  padding-top: 50px;
`;

// list-style-type: none;
const NavMenu = styled.ul`
  display: flex;
  text-transform: uppercase;
  justify-content: space-around;
  margin-top: 80px;
`;

const List = styled.li`
  color: black;
  display: inline-block;
  padding-right: 30px;

  &:hover {
    color: blue;
  }
  &:visited {
    color: none;
  }
`;

const StyledNavLink = styled(NavLink)``;
