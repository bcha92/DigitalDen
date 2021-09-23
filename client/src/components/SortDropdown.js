import React from "react";
import Styled from "styled-components";

export const SortDropdown = ({ onChangeHandler }) => {
  return (
    <Div>
      <label className="label">Sort by:</label>

      <Select className="sort-dropdown" onChange={onChangeHandler}>
        <option value="" disabled selected>
          Select Sort Option
        </option>
        <option value="low-high">Price - Lowest to Highest</option>
        <option value="high-low">Price - Highest to Lowest</option>
        <option value="a-z">Name - A to Z</option>
        <option value="z-a">Name - Z to A</option>
      </Select>
    </Div>
  );
};

export default SortDropdown;

const Div = Styled.div`
display: flex;
gap: 0.5rem;

.label {
    font-size:1.2em;
    font-weight: 700;
    color: dimgray;
    margin-top: 0.2rem;
}
`;

const Select = Styled.select`
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    border: none;
    background: dimgray;
    appearance: none;
    color: white;
    font-size:1em;
    font-weight: 700;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: relative;
   
  
    option {
      color: white;
      background: #454e51;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    `;
