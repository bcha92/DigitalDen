import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import SortDropdown from "./SortDropdown";

//This page will show all products from the store.
export const AllProducts = () => {
  //this will store all products from fetch
  const [products, setProducts] = useState();
  //will become true after the data from fetch as been stored
  const [isLoaded, setIsLoaded] = useState(false);

  let history = useHistory();

  // Sorting type option
  const [sortType, setSortType] = useState("");

  //retrieve all products
  useEffect(() => {
    fetch(sortType.length < 1 ? "/products/" : `/sorted/${sortType}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [sortType]);

  function handleClick(e, product) {
    e.preventDefault();
    if (localStorage.getItem("productInfo") === null) {
      localStorage.setItem("productInfo", JSON.stringify([]));
    }
    let cart = JSON.parse(localStorage.getItem("productInfo"));
    cart.push(product);
    localStorage.setItem("productInfo", JSON.stringify(cart));
    history.push("/cart");
  }

  // This is coming from SortDropdown.js - onChangeHandler
  const handleChangeSortType = (event) => {
    setSortType(event.target.value);
  };

  return (
    <Wrapper>
      <Title>
        <h1>All Products</h1>
      </Title>

      <SortContainer>
        <SortDropdown onChangeHandler={handleChangeSortType} />
      </SortContainer>
      {isLoaded ? (
        <>
          <Container>
            {products.map((product) => {
              return (
                <Link
                  to={`/details/${product._id}`}
                  style={{ textDecoration: "none" }}
                  key={product._id}
                >
                  <Card>
                    <Img src={product.imageSrc} />
                    <p
                      style={{
                        margin: "10px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {product.name}
                    </p>
                    <p>{product.price}</p>

                    {product.numInStock === 0 ? (
                      <OutOfStock>OUT OF STOCK</OutOfStock>
                    ) : (
                      <Button
                        onClick={(e) => {
                          handleClick(e, product);
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        {/* One-Click Buy */}
                        BUY NOW
                      </Button>
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
  /* display: flex;
  justify-content: center; */
  display: flex;
  justify-content: center;
  margin: 50px 0;
  font-size: 25px;
`;

const OutOfStock = styled.div`
  background-color: #1313dd;
  color: white;
  font-size: 10px;
  padding: 10px;
  border-radius: 30px;
  margin: 10px;
`;
const Button = styled(Link)`
  margin-top: 10px;
  background-color: #13dd90;
  color: white;
  font-size: 10px;
  padding: 10px;
  border-radius: 30px;
`;
