import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// searchbar to find and filter desired product
export const SearchBar = () => {
  const [inputValue, setInputValue] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => {
        setInputValue(
          data.data.map((item) => {
            return { name: item.name, _id: item._id };
          })
        );
      });
  }, []);

  return (
    <>
      <SearchContainer>
        <div>
          <SearchInput
            type='text'
            placeholder="Search the Den"
            onChange={(event) => setValue(event.target.value)}
          ></SearchInput>
          <i class="fas fa-backspace"></i>
        </div>
        <SuggestionContainer>
          {value.length > 1 && (
            <UnorderedList>
              {inputValue
                .filter((item) => {
                  return item.name.toLowerCase().includes(value.toLowerCase());
                })
                .map((item) => {
                  return (
                    <DetailLink to={`/details/${item._id}`}>
                      <SuggestionList>
                        <ResultText>
                          {item.name.slice(0, value.indexOf(value[0]))}
                        </ResultText>
                        {value}
                        <ResultText>
                          {item.name.slice(
                            value.indexOf(value[value.length - 1])
                          )}
                        </ResultText>
                        ∆{" "}
                      </SuggestionList>
                    </DetailLink>
                  );
                })}
            </UnorderedList>
          )}
        </SuggestionContainer>
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.div`
  float: right;
  /* margin-top: 50px; */
  display: flex;
  height: "500px";
  position: relative;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 3px;
`;
const SearchBtn = styled.button`
  width: 40px;
  height: 45px;
  margin-left: 3px;
`;

const SuggestionList = styled.li`
  border: 5px solid white;
  list-style-type: none;
  padding: 10px 0;
  margin-right: 100px;
  width: 100%;

  &:hover {
    background-color: #fff8dc;
  }
`;

const UnorderedList = styled.ul`
  position: absolute;
  top: 5vh;
  left: 0px;
  width: 295px;
  float: right;
  background-color: white;
  /* margin-left: 53vw; */
  border: 2px solid black;
  border-bottom: 1px solid black;
  height: 300px;
  text-align: left;
  border-radius: 4px;
  overflow-y: scroll;
  padding: 0 5px;
`;

const ResultText = styled.span`
  font-weight: bold;
`;

const DetailLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const SuggestionContainer = styled.div`
  /* height: 250px; */
`;
