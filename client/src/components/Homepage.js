import React from "react";
import { Header } from "./Header";
import { AllBrands } from "./AllBrands";
import styled from "styled-components";

import { Link } from "react-router-dom";

import casioLogo from ".././components/assets/casio.png";
import fitbitLogo from ".././components/assets/fitbit.png";
import samsungLogo from ".././components/assets/samsung.png";
// import polarLogo from ".././components/assets/polar.png";
import nikeLogo from ".././components/assets/nike.png";
import sonyLogo from ".././components/assets/sony.png";
import tomtomLogo from ".././components/assets/tomtom.png";

export const Homepage = () => {
  return (
    <>
      {/* <Image></Image> */}
      {/* <Heading>Popular Categories</Heading> */}
      <HeadingBrand>Popular Brands</HeadingBrand>
      <AllBrands />
      <Wrapper>
        <Row>
          <Link to="/brands?brand=Casio">
            <ImgContainer>
              <Img
                style={{
                  width: "216px",
                  height: "53px",
                }}
                src={casioLogo}
                alt="casio"
              />
            </ImgContainer>
          </Link>
          <Link to="/brands?brand=Fitbit">
            <ImgContainer>
              <Img
                style={{ width: "216px", height: "65px" }}
                src={fitbitLogo}
                alt="fitbit"
              />
            </ImgContainer>
          </Link>
          <Link to="/brands?brand=Nike">
            <ImgContainer>
              <Img
                style={{ width: "210px", height: "150px" }}
                src={nikeLogo}
                alt="nike"
              />
            </ImgContainer>
          </Link>
        </Row>
        <Row>
          <Link to="/brands?brand=Samsung">
            <ImgContainer>
              <Img
                style={{ width: "216px", height: "54px" }}
                src={samsungLogo}
                alt="samsung"
              />
            </ImgContainer>
          </Link>
          <Link to="/brands?brand=Tomtom">
            <ImgContainer>
              <Img
                style={{ width: "216px", height: "54px" }}
                src={tomtomLogo}
                alt="tomtom"
              />
            </ImgContainer>
          </Link>
          <Link to="/brands?brand=Sony">
            <ImgContainer>
              <Img
                style={{ width: "216px", height: "54px" }}
                src={sonyLogo}
                alt="sony"
              />
            </ImgContainer>
          </Link>
        </Row>
      </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 100px 100px 100px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 250px;
  margin: 20px 0px;
`;

const Img = styled.img``;
