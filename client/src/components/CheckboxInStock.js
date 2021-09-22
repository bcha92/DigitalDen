import React from "react";
import Styled from "styled-components";

const CheckboxInStock = ({ onChangeHandler, isCheckboxInStock }) => {
  return (
    <Div>
      <input
        type="checkbox"
        checked={isCheckboxInStock}
        onChange={onChangeHandler}
      />
      <label className="label">Products In Stock</label>
    </Div>
  );
};

export default CheckboxInStock;

const Div = Styled.div`
display: flex;
gap: 0.5rem;
align-items: center;
.label {
    font-size:1.2em;
    font-weight: 700;
    color: dimgray;
}
`;
