import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Cart Component
export const Cart = () => {
  // Fetches cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem("productInfo"));
  let subtotal = 0; // Subtotal Calculates the total amounts in the cart

  // Deletes selected item from cart using itemId
  const itemDelete = (itemId) => {
    cartItems.forEach((item, index) => {
      if (item._id === itemId) {
        cartItems.splice(index, 1);
        localStorage.setItem("productInfo", JSON.stringify(cartItems));
        {/* Reloads current page for changes to take effect */}
        window.location.reload();
      }
    })
    
  };

  // Adds quantity to item in cart
  const addQuantity = (itemId) => {
    cartItems.forEach((item) => {
      if (item._id === itemId) {
        item.quantity += 1;
        localStorage.setItem("productInfo", JSON.stringify(cartItems));
        {/* Reloads current page for changes to take effect */}
        window.location.reload();
      }
    })
  };

  // Removes quantity from item in cart
  // And deletes IF quantity is zero
  const removeQuantity = (itemId) => {
    cartItems.forEach((item, index) => {
      if (item._id === itemId) {
        item.quantity -= 1;
        // Delete from Cart if Quantity is Zero
        if (item.quantity < 1) {
          cartItems.splice(index, 1);
        }
        localStorage.setItem("productInfo", JSON.stringify(cartItems));
        {/* Reloads current page for changes to take effect */}
        window.location.reload();
      }
    })
  };


  return (
    <div>
      {/* Shopping Cart Title */}
      <CartTitle>My Shopping Cart</CartTitle>
      <CartWrapper>
        {/* Each ItemBar produces an item added to cart from LocalStorage */}
        {/* If there is no Items in the cart, the Default Message is Shown First */}

        {cartItems === null || cartItems.length === 0 ? (
          <B>Your Cart is Empty</B>
        ) : (
          <>
            {/* Table Header for Cart */}
            <ItemBar className="listHeader">
                <B></B>
                <B>Product Details</B>

                <B>Quantity</B>
                <B>Price</B>
            </ItemBar>
            <DivLine className="divHeader" />

            {cartItems.map((item) => {
              subtotal += Number(item.price.slice(1)).toFixed(2) * item.quantity * 100 / 100 // Subtotal Calculated with each item added
              // ^^ FLOTING POINT NUMBER FIX (WITH * 100 / 100) // DO NOT ALTER UNLESS MORE SUITABLE SOLUTION IS PROVIDED
              return (
                  <ItemBar key={item._id}>
                    <LeftBar>
                      <button onClick={() => itemDelete(item._id)}>x</button>
                      <ItemImg alt={item.name} src={item.imageSrc} />{/* Image */}
                      <NameWrap>
                        <B>{item.name}</B>{/* Name */}
                      </NameWrap>
                    </LeftBar>
                    <RightBar>
                      <QuantityWrap>
                        <span>{item.quantity}</span>
                        <div>
                          {/* Increment Quantity */}
                          <button
                            disabled={item.quantity >= item.numInStock ? true: false}
                            onClick={() => addQuantity(item._id)}
                          >+</button>
                          {/* Decrease Quantity: WARNING IF QUANTITY IS ZERO, ITEM IS REMOVED */}
                          <button onClick={
                            () => removeQuantity(item._id)
                          }>-</button>
                        </div>
                      </QuantityWrap>
                      <B className="price">{item.price}</B>
                    </RightBar>
                  </ItemBar>
              );
            })}
          <DivLine />
          </>
        )}

        {/* Subtotal is Calculated Here */}
        <ItemBar className="totalHead">
          <B>Subtotal: ${subtotal}</B>
        </ItemBar>
        <CheckoutBar>{/* Link will take you to "Checkout Page" */}
          
          <Link to="/checkout">
            <ToCheckOut disabled={
              cartItems === null || cartItems.length === 0 ?
              true : false
            }>
              Check Out
            </ToCheckOut>
          </Link>
        </CheckoutBar>
      </CartWrapper>
    </div>
  );
};

// Styled Components
const CartTitle = styled.h2`
  text-align: center;
  padding: 50px 0 0;
  margin-bottom: 20px;
  font-size: x-large;
`;

const CartWrapper = styled.div`
  margin: auto 200px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  background: #fff;
  border: 1px solid #888888;
  border-radius: 10px;
  box-shadow: 5px 5px 4px #888888;
`;

const ItemBar = styled.div`
  margin: 0 20px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & > div {
    flex-wrap: wrap;
  }
  &.listHeader {
    margin-bottom: 2px;
  }
  &.totalHead {
    justify-content: flex-end;
  }
`;

const LeftBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const RightBar = styled(LeftBar)`
  justify-content: flex-end;
`;

const ItemImg = styled.img`
  height: 100px;
  width: 100px;
  margin: auto 20px;
`;

const NameWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
  & > span {margin-right: 10px};
  & > div {
    display: flex;
    flex-direction: column;
  };
`;

const B = styled.p`
  font-weight: bold;
  &.price {margin-left: 50px};
`;

const R = styled.span`
  color: crimson;
  font-style: italic;
`;

const DivLine = styled.div`
  margin: 5px 0;
  background: #888888;
  height: 1px;
  width: 100%;
  &.divHeader {
    margin: 0 0 5px;
  }
`;

const CheckoutBar = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const ToCheckOut = styled.button`
  padding: 20px 50px;
`;
