import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FiPrinter } from "react-icons/fi";

export const Confirmation = ({ tax }) => {
  const cartItems = JSON.parse(localStorage.getItem("productInfo"));
  let subtotal = 0; // Subtotal Calculates the total amounts in the cart
  let total = 0;

  const random = Math.floor(Math.random() * 100000);
  const lenghtOfCart = cartItems.length;
  console.log(lenghtOfCart);

  cartItems.map(item => {
    subtotal += Number(item.price.slice(1)); // Subtotal Calculated with each item
    total = subtotal + Number(tax);
  });

  const printHandler = () => {
    window.print();
  };

  return (
    <Wrapper>
      <Form>
        <LogoBox>
          <h1>Order Received!</h1>
          <p>ORDER NO R-{random}</p>
        </LogoBox>
        <InfoBox>
          <h2 style={{ textAlign: "center" }}>Thank you for your order!</h2>
          <Summary>
            <h1 style={{ textDecoration: "underline" }}>Summary of Purchase</h1>
          </Summary>
          <PurchasedItem>
            <p>Purchased Item ({lenghtOfCart})</p>
            <p>{subtotal.toFixed(2)}</p>
          </PurchasedItem>
          <Shipping>
            <p>Shipping + Handling</p>
            <p>FREE</p>
          </Shipping>
          <Tax>
            <p>Sales Tax</p>
            <p>{tax}</p>
          </Tax>
          <Total>
            <h3>Total</h3>
            <h3>{total.toFixed(2)}</h3>
          </Total>
          <Delivery>
            <h2>Estimated Delivery Date</h2>
            <p>October 6th, 2021</p>
          </Delivery>
        </InfoBox>
        <ButtonDiv>
          <PrintContainer>
            <Button onClick={printHandler}>
              <PrintLogo />
              PRINT RECEIPT
            </Button>
          </PrintContainer>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button>Shop Again</Button>
          </Link>
        </ButtonDiv>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  padding: 20px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 70vh;
  width: 60vw;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eb2f2f;
  border-radius: 3px;
  height: 20vh;
  width: 100%;
  padding: 0;

  & h1 {
    font-size: 25px;
    margin-bottom: 10px;
    color: white;
    letter-spacing: 2px;
  }
  & p {
    color: #d4d4d4;
    font-size: 10px;
    letter-spacing: 2px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  padding: 20px;
  height: 100%;
  width: 100%;
`;
const Summary = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  padding: 20px;
  background-color: #ece8e8;
  width: 100%;
  margin-top: 10px;
`;
const PurchasedItem = styled.div`
  display: flex;
  border-radius: 2px;
  padding: 20px;
  /* background-color: #ece8e8; */
  width: 100%;
  margin-top: 10px;
  justify-content: space-between;
`;
const Shipping = styled.div`
  display: flex;
  border-radius: 2px;
  padding: 20px;
  /* background-color: #ece8e8; */
  width: 100%;
  margin-top: 10px;
  justify-content: space-between;
`;
const Tax = styled.div`
  display: flex;
  border-radius: 2px;
  padding: 20px;
  /* background-color: #ece8e8; */
  width: 100%;
  margin-top: 10px;
  justify-content: space-between;
`;
const Total = styled.div`
  display: flex;
  border-radius: 2px;
  padding: 20px;
  /* background-color: #ece8e8; */
  border-top: 2px solid #ece8e8;
  border-bottom: 2px solid #ece8e8;
  width: 100%;
  margin-top: 10px;
  justify-content: space-between;
  font-size: 20px;
`;
const Delivery = styled.div`
  display: flex;
  border-radius: 2px;
  padding: 20px;
  /* background-color: #ece8e8; */
  width: 100%;
  margin-top: 10px;
  justify-content: space-between;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  background-color: #f44336; /* Green */
  border: none;
  border-radius: 2px;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 40px 2px;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #555555;
    color: white;
  }
`;

const PrintContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PrintLogo = styled(FiPrinter)`
  margin-right: 7px;
  margin-bottom: -2px;
`;
