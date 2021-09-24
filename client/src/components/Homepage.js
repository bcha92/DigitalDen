import React from "react";
import styled from "styled-components";

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
      <HeadingBrand>Popular Brands</HeadingBrand>
      <Wrapper>
        <Row>
          <Link to="/brands/13334">
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
          <Link to="/brands/10759">
            <ImgContainer>
              <Img
                style={{ width: "216px", height: "50px" }}
                src={fitbitLogo}
                alt="fitbit"
              />
            </ImgContainer>
          </Link>
          <Link to="/brands/11939">
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
          <Link to="/brands/11837">
            <ImgContainer>
              <Img
                style={{ width: "216px", height: "120px" }}
                src={polarLogo}
                alt="polar"
              />
            </ImgContainer>
          </Link>
          <Link to="/brands/18324">
            <ImgContainer>
              <Img
                style={{ width: "216px", height: "64px" }}
                src={tomtomLogo}
                alt="tomtom"
              />
            </ImgContainer>
          </Link>
          <Link to="/brands/12407">
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

  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;

  &:hover {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
`;

const Img = styled.img``;

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

const BackgroundImg = styled.img`
  border-radius: 10px;

  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;
  transition-property: box-shadow;

  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
`;
