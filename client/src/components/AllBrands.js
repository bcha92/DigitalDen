import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const AllBrands = () => {
  const [brand, setBrand] = useState([]);
  // const [status, setStatus] = useState("loading")

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
        {brand.map((item) => {
          return (
            <BrandLink key={item._id} to={`/brands/${item._id}`}>
              <BrandText>
                <Text>{item.name}</Text>
              </BrandText>
            </BrandLink>
          );
        })}
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-right: 25px; ;
`;

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
