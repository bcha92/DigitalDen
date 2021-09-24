import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const CategoryProduct = () => {
  //this will store all products from a category from fetch
  const [products, setProducts] = useState();
  //will become true after the data from fetch as been stored
  const [isLoaded, setIsLoaded] = useState(false);
  let history = useHistory();

  const { name } = useParams();
  useEffect(() => {
    fetch(`/category/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [name]);

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

  return (
    <Wrapper>
      <Title>
        <h1>Products By {name}</h1>
      </Title>
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
                    {/* {product.numInStock === 0 && (
                      <OutOfStock>OUT OF STOCK</OutOfStock>
                    )} */}
                    {product.numInStock === 0 ? (
                      <OutOfStock>OUT OF STOCK</OutOfStock>
                    ) : (
                      <Button
                        onClick={(e) => {
                          handleClick(e, product);
                        }}
                        style={{ textDecoration: "none" }}
                      >
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
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
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

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  font-size: 25px;
`;

const OutOfStock = styled.div`
  background-color: #ababab;
  color: black;
  font-size: 10px;
  margin: 10px;
  padding: 10px 50px;
  border-radius: 30px;
`;
const Button = styled(Link)`
  margin-top: 10px;
  background-color: #ffa41c;
  color: black;
  font-size: 10px;
  padding: 10px 50px;
  border-radius: 30px;

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
`;
