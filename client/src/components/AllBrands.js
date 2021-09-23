import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const AllBrands = () => {
  const [brand, setBrand] = useState([]);
  // Button - View more
  const [visible, setVisible] = useState(6);
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
      <Title>All brands</Title>

      <Container>
        {brand.slice(0, visible).map((item, brandName) => {
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
  width: 50%;
  align-items: center;
  margin-left: 430px;
`;
// max-width: 1000px;

const BrandText = styled.div`
  background-color: white;
  height: 50px;
  width: 200px;
  font-size: 15px;
  align-items: center;
  border: 1px solid white;
  padding: 10px;
  border-radius: 105px;
  box-shadow: 5px 5px 4px #888888;
  margin-top: 50px;
  margin-left: 70px;
`;

const Title = styled.h2`
  text-align: center;
  color: black;
`;

const BrandLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Text = styled.h3`
  align-items: center;
  margin-left: 70px;
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
