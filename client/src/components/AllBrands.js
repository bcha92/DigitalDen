import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const AllBrands = () => {
  const [brand, setBrand] = useState([]);

  // Button - View more
  const [visible, setVisible] = useState(12);
  // const [status, setStatus] = useState("loading")

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 12);
  };

  // fetching data to receive all brands
  useEffect(() => {
    fetch("/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrand(data.data);
        // setStatus("loading complete")
      });
  }, []);

  return (
    <>
      <Title>
        <h1>All brands</h1>
      </Title>
      <Container>
        {brand
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .slice(0, visible)
          .map((item, brandName) => {
            return (
              <BrandLink key={item._id} to={`/brands/${item._id}`}>
                <BrandText>
                  <Text>{item.name}</Text>
                </BrandText>
              </BrandLink>
            );
          })}
      </Container>
      <Container>
        <Link to="/brands">
          <ListItem onClick={showMoreItems}>View More</ListItem>
        </Link>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`;

const BrandText = styled.div`
  background-color: white;
  height: 50px;
  width: 200px;
  font-size: 15px;
  align-items: center;
  border: 1px solid white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-out;
  margin-top: 50px;
  margin-left: 70px;

  &:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 50px 150px rgba(0, 0, 0, 0.11), 0 24px 46px #c4c4c4;
  }
  &:active {
    transform: scale(1) translateZ(0);

    filter: brightness(0.5) saturate(0) contrast(1.2) blur(1px);
  }
`;

// const Title = styled.h2`
//   text-align: center;
//   color: black;
// `;
const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  font-size: 25px;
`;

const BrandLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Text = styled.h3`
  text-align: center;
  margin-top: 5px;
`;

const ListItem = styled.button`
  margin-left: 30px;
  border: none;
  outline: none;
  width: 120%;
  cursor: pointer;
  padding: 15px 10px;
  margin-top: 50px;
  border-radius: 5px;
  background-color: #d1d1d1;
  font-family: "Oswald", sans-serif;
`;
