import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { FaShoppingCart } from "react-icons/fa";
import GlobalStyles from "./GlobalStyles";

export const Header = ({ loginData, userLogIn, setLoginData }) => {
  console.log(loginData, " LOG IN DATA");
  console.log(userLogIn.firs, " user log in");
  return (
    <>
      <GlobalStyles />
      <LogInRegisterContainer>
        {loginData === undefined ? (
          <>
            <LogInLink to="/login">
              <Button>Log In</Button>
            </LogInLink>
            <RegisterLink to="/register">
              <Button>Register</Button>
            </RegisterLink>
          </>
        ) : (
          <>
            <span>
              Welcome {loginData !== undefined && loginData.data.firstName}
            </span>

            <LogInLink to="/login">
              <Button
                onClick={() => {
                  setLoginData(undefined);
                }}
              >
                Log Out
              </Button>
            </LogInLink>
          </>
        )}
      </LogInRegisterContainer>
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
        <SearchBar />
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
  align-items: center;
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

const LogInRegisterContainer = styled.div`
  float: right;
  margin-right: 20px;
  margin-top: 10px;
  top: 5px;
`;

const RegisterLink = styled(NavLink)`
  text-decoration: none;
  color: grey;
`;

const LogInLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 20px;
  color: grey;
`;
const Button = styled.button`
  border: none;
  background: transparent;
`;
