import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SortDropdown from "./SortDropdown";
// import CheckboxInStock from "./CheckboxInStock";

//This page will show all products from the store.
export const AllProducts = () => {
  //this will store all products from fetch
  const [products, setProducts] = useState();
  //will become true after the data from fetch as been stored
  const [isLoaded, setIsLoaded] = useState(false);

  // Filtering products
  // const [filteredProducts, setFilteredProducts] = useState([]);

  // Checkbox
  // const { isCheckboxInStock, setIsCheckboxInStock } = useState(false);

  // Sorting type option
  const [sortType, setSortType] = useState("");

  //retrieve all products
  useEffect(() => {
    fetch(`/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // console.log(products, "this is products");

  // This is coming from SortDropdown.js - onChangeHandler
  const handleChangeSortType = (event) => {
    setSortType(event.target.value);
  };

  const sortArr = (arr, type) => {
    if (arr.length === 0) {
      return arr;
    }
    let sortedArr;
    switch (type) {
      case "priceLowToHight":
        sortedArr = arr.sort(function (a, b) {
          return (
            Number(a.price.replace("$", "")) - Number(b.price.replace("$", ""))
          );
        });
        break;
      case "priceHightToLow":
        sortedArr = arr.sort(function (a, b) {
          return (
            Number(b.price.replace("$", "")) - Number(a.price.replace("$", ""))
          );
        });
        break;
      case "AtoZ":
        sortedArr = arr.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        break;
      case "ZtoA":
        sortedArr = arr.sort(function (a, b) {
          if (b.name < a.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        return arr;
        break;
    }

    return sortedArr;
  };

  // CheckBox Stock
  // const handleStockProducts = () => {
  //   setIsCheckboxInStock((isCheckboxInStock) => !isCheckboxInStock);
  // };

  return (
    <Wrapper>
      {/* <Title>
        <h1>All Products</h1>
      </Title> */}
      {/* <CheckboxContainer>
        <CheckboxInStock
          onChangeHandler={handleStockProducts}
          isCheckboxInStock={isCheckboxInStock}
        />
      </CheckboxContainer> */}
      <SortContainer>
        <SortDropdown onChangeHandler={handleChangeSortType} />
      </SortContainer>
      {isLoaded ? (
        <>
          <Container>
            {sortArr &&
              products.map((product) => {
                return (
                  <Link
                    to={`/details/${product._id}`}
                    style={{ textDecoration: "none" }}
                    key={product._id}
                  >
                    <Card>
                      <Img src={product.imageSrc} />
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                      {product.numInStock === 0 && (
                        <OutOfStock>OUT OF STOCK</OutOfStock>
                      )}
                    </Card>
                  </Link>
                );
              })}
          </Container>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: "Oswald", sans-serif;
`;

const Card = styled.div`
  background-color: white;
  height: 250px;
  width: 250px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  padding: 10px;
  margin: 10px;
  box-shadow: 5px 5px 4px #888888;
  border-radius: 20px;
  color: black;
`;

const Img = styled.img`
  height: 100px;
  width: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const SortContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-bottom: 2rem;
  margin-right: 10rem;
`;

// const CheckboxContainer = styled.div`
//   margin-top: 4rem;
//   margin-right: 30rem;
//   justify-content: flex-end;
//   margin-bottom: -1.4rem;
//   display: flex;
//   flex-wrap: wrap;
// `;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const OutOfStock = styled.div`
  background-color: #1313dd;
  color: white;
  font-size: 10px;
  padding: 10px;
  border-radius: 30px;
`;
