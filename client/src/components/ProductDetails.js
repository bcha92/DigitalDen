import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const ProductDetails = () => {
  //store the id of the item clicked by the user from the
  const { _id } = useParams();
  //this will store all products from fetch
  const [product, setProduct] = useState();
  //will become true after the data from fetch as been stored
  const [isLoaded, setIsLoaded] = useState(false);

  if (localStorage.getItem("productInfo") === null) {
    localStorage.setItem("productInfo", JSON.stringify([]));
  }

  //retrieve all products
  useEffect(() => {
    fetch(`/products/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct({ ...data.data, quantity: 1 });
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [_id]);

  const handleClick = () => {
    // Creates an empty array if "productInfo" is non-existent
    if (localStorage.getItem("productInfo") === null) {
      localStorage.setItem("productInfo", JSON.stringify([]));
    }
    // Gets "productInfo" from localStorage and assigns to productArray
    const productArray = JSON.parse(localStorage.getItem("productInfo"));

    // Has the item been found in the array?
    let itemFound = false;

    // Iterates forEach to see if product already exist in productArray
    productArray.forEach((item) => {
      // If it does exist, it simply increments the item quantity by 1
      if (item._id === product._id) {
        if (item.quantity < product.numInStock) {
          item.quantity++;
          itemFound = true;
        } else {
          itemFound = true; // Ensures, a second identical item is not added
        }
      }
    });
    // If item is NOT found, product with 1 quantity is pushed
    if (!itemFound) {
      productArray.push(product);
    }

    // Once finished, array is set into local storage
    localStorage.setItem("productInfo", JSON.stringify(productArray));
  };

  // Disable "Add to Cart" if Cart emptied out this inventory
  const disableOnFull = (id) => {
    let disableOnFull = false;
    let cart = JSON.parse(localStorage.getItem("productInfo"));
    cart.forEach((item) => {
      if (item._id === id && item.quantity >= product.numInStock) {
        disableOnFull = true;
      }
    });
    return disableOnFull;
  };

  return (
    <Wrapper>
      {isLoaded ? (
        <>
          <Container1>
            <Img src={product.imageSrc} />
          </Container1>
          <Container2>
            <InfoContainer>
              <ProductInfo>{product.name}</ProductInfo>
              <ProductInfo>Category: {product.category}</ProductInfo>
              <ProductInfo>Body Location: {product.body_location}</ProductInfo>
              <ProductInfo>Price: {product.price}</ProductInfo>
            </InfoContainer>
            {/* <h3>Number of Stock: {product.numInStock}</h3> */}
            {product.numInStock > 0 ? (
              <Link to="/cart">
                <Button
                  onClick={handleClick}
                  disabled={disableOnFull(_id) ? true : false}
                >
                  Add to cart
                </Button>
              </Link>
            ) : (
              <OutOfStock>OUT OF STOCK</OutOfStock>
            )}
            {disableOnFull(_id) && (
              <R>
                Unable to add to cart.All remaining stock has been added to
                cart.
              </R>
            )}
          </Container2>
        </>
      ) : (
        <h2>Loading..</h2>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: "Oswald", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container1 = styled.div`
  height: 500px;
  width: 500px;
  font-family: "Oswald", sans-serif;
  box-shadow: 5px 5px 4px #888888;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container2 = styled.div`
  height: 400px;
  width: 400px;
  font-family: "Oswald", sans-serif;
  border-radius: 20px;
  background-color: #e9e8e8;
  margin-left: 100px;
  text-align: center;
  padding: 30px;
`;

const Img = styled.img`
  height: 80%;
  width: 80%;
`;

const Button = styled.button`
  margin-top: 10px;
  background-color: #ffa41c;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 10px 50px;
  border-radius: 30px;
  border: none;

  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -webkit-transition-property: transform;
  transition-property: transform;

  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    background-color: #e6961e;
  }
  &:disabled {
    display: none;
  }
`;

const R = styled.span`
  color: red;
  font-style: italic;
  margin-top: 10px;
`;

const ProductInfo = styled.h3`
  margin-top: 35px;
  font-style: var(--heading-font-family);
`;

const InfoContainer = styled.div`
  margin-top: 70px;
`;
const OutOfStock = styled.div`
  background-color: #ababab;
  color: white;
  font-size: 10px;
  margin: 25px auto;
  padding: 10px 50px;
  border-radius: 30px;
  width: 170px;
`;
