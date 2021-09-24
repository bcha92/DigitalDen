import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// display specific brand's products
export const BrandProduct = () => {
  const [brand, setBrand] = useState([]);
  const [brandName, setBrandName] = useState([]);
  // const [products, setProducts] = useState();
  // loading status for each fetch
  const [isLoaded, setIsLoaded] = useState(false);
  //   const [status, setStatus] = useState(false);

  let history = useHistory();

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
    <Container>
      <Title>Products for {brandName.name}</Title>

      {isLoaded ? (
        // brand.map((item) => {
        //   return (
        //     <Link key={item._id} to={`/details/${item._id}`}>
        //       <ProductContainer>
        //         <ItemName>{item.name}</ItemName>
        //         <ItemPrice>{item.price}</ItemPrice>
        //         <ItemImg src={item.imageSrc}></ItemImg>
        //       </ProductContainer>
        //     </Link>
        //   );
        // })
        <>
          <Wrapper>
            {brand.map((item) => {
              return (
                <Link
                  key={item._id}
                  to={`/details/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card>
                    <Img src={item.imageSrc} />
                    <p
                      style={{
                        margin: "10px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {item.name}
                    </p>
                    <p>{item.price}</p>
                    {/* {item.numInStock === 0 && (
                      <OutOfStock>OUT OF STOCK</OutOfStock>
                    )} */}
                    {item.numInStock === 0 ? (
                      <OutOfStock>OUT OF STOCK</OutOfStock>
                    ) : (
                      <Button
                        onClick={(e) => {
                          handleClick(e, item);
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
          </Wrapper>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
};

const Img = styled.img`
  height: 100px;
  width: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Title = styled.h1`
  display: flex;
  font-size: 20px;
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
const Button = styled.div`
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

const Container = styled.div`
  margin-top: 40px;
`;
