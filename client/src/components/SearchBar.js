import React, { useEffect, useState } from "react";
import styled from "styled-components";

// searchbar to find and filter desired product
export const SearchBar = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  // console.log(products, " PR O D U CT S");

  return (
    <>
      {/* <SearchContainer>
                {products.map((item) => {
                    return <SearchInput placeholder="Search <WEBSITENAME>">{item}</SearchInput>
                })}
            </SearchContainer> */}
    </>
  );
};

const SearchContainer = styled.div`
  margin: 1px;
  float: right;
  margin-top: 50px;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 3px;
`;
