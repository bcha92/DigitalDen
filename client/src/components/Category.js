import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Category = () => {
  //this will store all category from fetch
  const [category, setCategory] = useState();
  //will become true after the data from fetch as been stored
  const [isLoaded, setIsLoaded] = useState(false);

  //retrieve all category
  useEffect(() => {
    fetch(`/category`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log("this is test", category);

  return (
    <Wrapper>
      <Title>
        <h1>Shop By Category</h1>
      </Title>
      {isLoaded ? (
        <>
          <Container>
            {category.map((name) => {
              return (
                <Link
                  to={`/category/${name}`}
                  style={{ textDecoration: "none" }}
                  key={name}
                >
                  <Card>{name}</Card>
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
const Title = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  background-color: white;
  height: 50px;
  width: 200px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  padding: 10px;
  margin: 10px;
  box-shadow: 5px 5px 4px #888888;
  border-radius: 20px;
  color: black;
  font-weight: bold;
`;
