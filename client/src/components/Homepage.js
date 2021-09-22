import React from "react";
import styled from "styled-components";

// import { Category } from "./Category";

import { Link } from "react-router-dom";

import casioLogo from ".././components/assets/casio.png";
import fitbitLogo from ".././components/assets/fitbit.png";
import polarLogo from ".././components/assets/polar.png";
import nikeLogo from ".././components/assets/nike.png";
import sonyLogo from ".././components/assets/sony.png";
import tomtomLogo from ".././components/assets/tomtom.png";

import backgroundImg from ".././components/assets/home-bg.jpg";

export const Homepage = () => {
  return (
    <>
      <BackgroundContainer>
        <BackgroundImg
          style={{
            width: "1450px",
            height: "820px",
          }}
          src={backgroundImg}
          alt="background"
        />
      </BackgroundContainer>
      {/* <Heading>Popular Categories</Heading>
      <Category /> */}
      <HeadingBrand>Popular Brands</HeadingBrand>
      <Wrapper>
        <Row>
          <Link to="/brands?brand=Casio">
            <ImgContainer>
              <Img
                style={{
                  width: "200px",
                  height: "45px",
                }}
                src={casioLogo}
                alt="casio"
              />
            </ImgContainer>
          </Link>
          <Link to="/brands?brand=Fitbit">
            <ImgContainer>
              <Img
                style={{ width: "216px", height: "50px" }}
                src={fitbitLogo}
                alt="fitbit"
              />
            </ImgContainer>
          </Link>
          <Link to="/brands?brand=Nike">
            <ImgContainer>
              <Img
                style={{ width: "180px", height: "120px" }}
                src={nikeLogo}
                alt="nike"
              />
            </ImgContainer>
          </Link>
        </Row>
        <Row>
          <Link to="/brands?brand=Polar">
            <ImgContainer>
              <Img
                style={{ width: "216px", height: "120px" }}
                src={polarLogo}
                alt="polar"
              />
            </ImgContainer>
          </Link>
          <Link to="/brands?brand=Tomtom">
            <ImgContainer>
              <Img
                style={{ width: "216px", height: "64px" }}
                src={tomtomLogo}
                alt="tomtom"
              />
            </ImgContainer>
          </Link>
          <Link to="/brands?brand=Sony">
            <ImgContainer>
              <Img
                style={{ width: "200px", height: "45px" }}
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

// const Heading = styled.h3`
//   display: flex;
//   text-transform: uppercase;
//   justify-content: space-around;
//   margin-top: 150px;
//   font-size: 25px;
// `;

const HeadingBrand = styled.h3`
  display: flex;
  text-transform: uppercase;
  justify-content: space-around;
  margin-top: 150px;
  font-size: 25px;
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
  margin: 20px 0px -5px;
`;

const Img = styled.img``;

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

const BackgroundImg = styled.img`
  border-radius: 10px;
`;
