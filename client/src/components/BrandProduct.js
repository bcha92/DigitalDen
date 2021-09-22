import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

// display specific brand's products
export const BrandProduct = () => {
  const [brand, setBrand] = useState([]);
  const [brandName, setBrandName] = useState([]);
  // const [products, setProducts] = useState();
  // loading status for each fetch
  const [isLoaded, setIsLoaded] = useState(false);
  //   const [status, setStatus] = useState(false);

  const { _id } = useParams();

  useEffect(() => {
    fetch(`/brands/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setBrand(data.data);
        setBrandName(data.store);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [_id]);

  return (
    <>
      <Title>Products for {brandName.name}</Title>

      {isLoaded ? (
        brand.map((item) => {
          return (
            <Link key={item._id} to={`/details/${item._id}`}>
              <ProductContainer>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{item.price}</ItemPrice>
                <ItemImg src={item.imageSrc}></ItemImg>
              </ProductContainer>
            </Link>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

const Title = styled.h2`
  color: black;
  text-align: center;
`;

const ProductContainer = styled.div`
  display: flex;
  color: black;
  border: 2px solid black;
  width: 425px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const ItemName = styled.span`
  font-weight: bold;
  margin: 3px;
  /* text-overflow: ellipsis; */
`;

const ItemPrice = styled.span`
  color: black;
  margin: 10px;
`;

const ItemImg = styled.img`
  height: 100px;
`;
