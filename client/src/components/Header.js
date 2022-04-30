import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { FaShoppingCart } from "react-icons/fa";
import GlobalStyles from "./GlobalStyles";

export const Header = ({ loginData, userLogIn, setLoginData }) => {
  return (
    <>
      <GlobalStyles />
      <LogInRegisterContainer>
        {loginData === undefined ? (
          <>
            <LogInLink to="/login">
              <LoginOutRegisterButton>Log In</LoginOutRegisterButton>
            </LogInLink>
            <RegisterLink to="/register">
              <LoginOutRegisterButton>Register</LoginOutRegisterButton>
            </RegisterLink>
          </>
        ) : (
          <>
            <span>
              Welcome {loginData !== undefined && loginData.data.firstName}
            </span>

            <LogInLink to="/login">
              <LoginOutRegisterButton
                onClick={() => {
                  setLoginData(undefined);
                }}
              >
                Log Out
              </LoginOutRegisterButton>
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
  padding-left: 15rem;
`;

const NavMenu = styled.ul`
  display: flex;
  text-transform: uppercase;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
  padding-right: 15vw;
`;

const List = styled.li`
  color: black;
  font-style: var(--heading-font-family);
  display: inline-block;
  padding-right: 30px;
  transition: all 0.2s ease-in-out;
  font-size: 1.5rem;

`;

const StyledNavLink = styled(NavLink)``;

const ShoppingCart = styled(FaShoppingCart)`
  cursor: pointer;

  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
&:hover {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
&:hover {
  -webkit-transform: scale(1.5) rotate(12deg);
  transform: scale(1.5) rotate(-12deg);
`;

const LogInRegisterContainer = styled.div`
  float: right;
  padding-right: 3vw;
  padding-top: 2.5vh;
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
  font-size: 15px;
`;
const LoginOutRegisterButton = styled.button`
  border: none;
  background: transparent;
    color: grey;
    cursor: pointer;
  }

  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;

  color: black;
  font-size: 23px;
`;
