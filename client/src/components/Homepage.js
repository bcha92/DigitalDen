import React from "react";
import { Header } from "./Header";
import { Brands } from "./Brands";
import styled from "styled-components";

export const Homepage = () => {
  return (
    <>
      {/* <Image></Image> */}
      {/* <Heading>Popular Categories</Heading> */}
      <HeadingBrand>Popular Brands</HeadingBrand>
      <Brands />
    </>
  );
};

const Heading = styled.h3`
  display: flex;
  text-transform: uppercase;
  justify-content: space-around;
  margin-top: 300px;
`;

const HeadingBrand = styled.h3`
  display: flex;
  text-transform: uppercase;
  justify-content: space-around;
  margin-top: 300px;
`;
