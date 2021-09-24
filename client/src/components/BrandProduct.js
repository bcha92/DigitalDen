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
    <>
      <Title>
        <h1>Products for {brandName.name}</h1>
      </Title>

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
          <Container>
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
          </Container>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

// const Title = styled.h2`
//   color: black;
//   text-align: center;
// `;

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
const Button = styled.div`
  margin-top: 10px;
  background-color: #13dd90;
  color: white;
  font-size: 10px;
  padding: 10px;
  border-radius: 30px;
`;
