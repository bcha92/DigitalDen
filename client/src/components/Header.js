import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";

import { FaShoppingCart } from "react-icons/fa";

import GlobalStyles from "./GlobalStyles";

export const Header = () => {
  return (
    <>
      <GlobalStyles />
      <SearchBar />
      <HomeNavLink exact to="/">
        <Title>DIGITALDEN</Title>
      </HomeNavLink>
      <NavMenu>
        {/* <CategoriesDropDown /> */}
        {/* <BrandDropDown /> */}
        <StyledNavLink exact to="/category">
          <List>Shop by Category</List>
        </StyledNavLink>
        <StyledNavLink exact to="/brands">
          <List>Shop by Brand</List>
        </StyledNavLink>
        <StyledNavLink exact to="/products">
          <List>Shop All</List>
        </StyledNavLink>
        <StyledNavLink exact to="/cart">
          <List>
            <ShoppingCart />
          </List>
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
  font-style: var(--heading-font-family);
  font-size: 55px;
  padding-top: 50px;
`;

const NavMenu = styled.ul`
  display: flex;
  text-transform: uppercase;
  margin-top: 80px;
  justify-content: center;
`;

const List = styled.li`
  color: black;
  font-style: var(--heading-font-family);
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

const ShoppingCart = styled(FaShoppingCart)`
  cursor: pointer;
`;
