import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import fitnessImg from "./assets/fitness.jpeg";
import medicalImg from "./assets/medical.jpeg";
import lifestyleImg from "./assets/lifestyle.jpg";
import entertainmentImg from "./assets/entertainment.jpeg";
import industrialImg from "./assets/industrial.jpeg";
import animalImg from "./assets/animal.jpg";
import gamingImg from "./assets/gaming.jpg";

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

  return (
    <Wrapper>
      {isLoaded ? (
        <>
          <Container>
            {category.map((name) => {
              return (
                <Link
                  to={`/category/${name}`}
                  style={{ textDecoration: "none" }}
                  key={name}
                ></Link>
              );
            })}
          </Container>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
      <CardWrapper>
        <Link to="/category/Fitness">
          <CategoryFitness
            style={{
              width: "350px",
              height: "350px",
              backgroundImage: `url(${fitnessImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Text>Fitness</Text>
          </CategoryFitness>
        </Link>
        <Link to="/category/Medical">
          <CategoryMedical
            style={{
              width: "350px",
              height: "350px",
              backgroundImage: `url(${medicalImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Text>Medical</Text>
          </CategoryMedical>
        </Link>
        <Link to="/category/Lifestyle">
          <CategoryLifestyle
            style={{
              width: "350px",
              height: "350px",
              backgroundImage: `url(${lifestyleImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Text>Lifestyle</Text>
          </CategoryLifestyle>
        </Link>
        <Link to="/category/Entertainment">
          <CategoryEntertainment
            style={{
              width: "350px",
              height: "350px",
              backgroundImage: `url(${entertainmentImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Text>Entertainment</Text>
          </CategoryEntertainment>
        </Link>
        <Link to="/category/Industrial">
          <CategoryIndustrial
            style={{
              width: "350px",
              height: "350px",
              backgroundImage: `url(${industrialImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Text>Industrial</Text>
          </CategoryIndustrial>
        </Link>
        <Link to="/category/Pets and Animals">
          <CategoryPetsAnimal
            style={{
              width: "350px",
              height: "350px",
              backgroundImage: `url(${animalImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Text>Pets and Animals</Text>
          </CategoryPetsAnimal>
        </Link>
        <Link to="/category/Gaming">
          <CategoryGaming
            style={{
              width: "350px",
              height: "350px",
              backgroundImage: `url(${gamingImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Text class="card__background">Gaming</Text>
          </CategoryGaming>
        </Link>
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: "Oswald", sans-serif;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: repeat(2, 21vw);
  justify-content: center;
  grid-gap: 1px;
  margin-left: 20.5rem;
`;

const CategoryFitness = styled.div`
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-out;
  margin: 50px 25px;
  font-size: 25px;

  &:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px #c4c4c4;
  }
  &:active {
    transform: scale(1) translateZ(0);
    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11), 0 15px 24px #c4c4c4;
  }
`;

const CategoryMedical = styled.div`
  border-radius: 7px;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-out;
  margin: 50px 25px;
  font-size: 25px;

  &:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px #c4c4c4;
  }
  &:active {
    transform: scale(1) translateZ(0);
    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11), 0 15px 24px #c4c4c4;
  }
`;
const CategoryLifestyle = styled.div`
  border-radius: 7px;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-out;
  margin: 50px 25px;
  font-size: 25px;

  &:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px #c4c4c4;
  }
  &:active {
    transform: scale(1) translateZ(0);
    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11), 0 15px 24px #c4c4c4;
  }
`;

const CategoryEntertainment = styled.div`
  border-radius: 7px;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-out;
  margin: 50px 25px;
  font-size: 25px;

  &:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px #c4c4c4;
  }
  &:active {
    transform: scale(1) translateZ(0);
    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11), 0 15px 24px #c4c4c4;
  }
`;

const CategoryIndustrial = styled.div`
  border-radius: 7px;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-out;
  margin: 50px 25px;
  font-size: 25px;

  &:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px #c4c4c4;
  }
  &:active {
    transform: scale(1) translateZ(0);
    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11), 0 15px 24px #c4c4c4;
  }
`;

const CategoryPetsAnimal = styled.div`
  border-radius: 7px;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-out;
  margin: 50px 25px;
  font-size: 25px;

  &:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px #c4c4c4;
  }
  &:active {
    transform: scale(1) translateZ(0);
    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11), 0 15px 24px #c4c4c4;
  }
`;

const CategoryGaming = styled.div`
  border-radius: 7px;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-out;
  margin: 50px 25px;
  font-size: 25px;

  &:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px #c4c4c4;
  }
  &:active {
    transform: scale(1) translateZ(0);
    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11), 0 15px 24px #c4c4c4;
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
  }
`;

const Text = styled.p`
  font-weight: 500;
  text-decoration: none;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  font-family: var(--heading-font-family);
  font-weight: 700;
`;

const Img = styled.img``;
