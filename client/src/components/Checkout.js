import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Checkout = () => {
  // const [errMessage, setErrMessage] = useState("");

  const handleClick = () => {};

  return (
    <>
      <Wrapper>
        <PaymentContainer>
          <ContactWrapper>
            <HeaderTitle>Contact Information</HeaderTitle>
            <InputDiv>
              <OuterSpan>
                <Input className="inputText" type="text" required />
                <InnerSpan className="floating-label">Email</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <HeaderTitle>Shipping Address</HeaderTitle>
            <InputRow>
              <InputDiv>
                <OuterSpan>
                  <FirstInput className="inputText" type="text" required />
                  <InnerSpan className="floating-label">First name</InnerSpan>
                </OuterSpan>
              </InputDiv>
              <InputDiv>
                <OuterSpan>
                  <SecondInput className="inputText" type="text" required />
                  <InnerSpan className="floating-label">Last name</InnerSpan>
                </OuterSpan>
              </InputDiv>
            </InputRow>
            <InputDiv>
              <OuterSpan>
                <Input className="inputText" type="text" required />
                <InnerSpan className="floating-label">Address</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputRow>
              <InputDiv>
                <OuterSpan>
                  <FirstTwoInput className="inputText" type="text" required />
                  <InnerSpan className="floating-label">City</InnerSpan>
                </OuterSpan>
              </InputDiv>
              <InputDiv>
                <OuterSpan>
                  <FirstTwoInput className="inputText" type="text" required />
                  <InnerSpan className="floating-label">Province</InnerSpan>
                </OuterSpan>
              </InputDiv>
              <InputDiv>
                <OuterSpan>
                  <LastInput className="inputText" type="text" required />
                  <InnerSpan className="floating-label">Country</InnerSpan>
                </OuterSpan>
              </InputDiv>
            </InputRow>
            <InputDiv>
              <OuterSpan>
                <Input className="inputText" type="text" required />
                <InnerSpan className="floating-label">Phone</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputRow>
              <InputDiv>
                <OuterSpan>
                  <FirstInput className="inputText" type="text" required />
                  <InnerSpan className="floating-label">
                    Credit card number
                  </InnerSpan>
                </OuterSpan>
              </InputDiv>
              <InputDiv>
                <OuterSpan>
                  <SecondInput className="inputText" type="text" required />
                  <InnerSpan className="floating-label">Expiry date</InnerSpan>
                </OuterSpan>
              </InputDiv>
            </InputRow>
            {/* {errMessage && <p style={{ color: "red" }}>{errMessage}</p>} */}
            {/* <BtnWrapper onClick={}> */}
            <Link to={"/confirmation"} style={{ textDecoration: "none" }}>
              <Btn>Confirm Payment</Btn>
            </Link>
            {/* </BtnWrapper> */}
          </ContactWrapper>
        </PaymentContainer>
        <ViewCartContainer>
          <CartContainer>
            <ItemsContainer>
              <ItemContainer>
                <ImageWrapper>
                  <ItemImage src />
                </ImageWrapper>
                <Quantity></Quantity>
                <ItemName></ItemName>
                <ItemPrice></ItemPrice>
              </ItemContainer>
            </ItemsContainer>
            <Divider />
            <SubTotal>
              <p>Subtotal</p>
              <p>CAD $</p>
            </SubTotal>
            <SubTotal>
              <p>Shipping</p>
              <p>Free</p>
            </SubTotal>
            <SubTotal>
              <p>Tax</p>
              <p>CAD $</p>
            </SubTotal>
            <Divider />
            <Total>
              <p>Total</p>
              <p>CAD $</p>
            </Total>
          </CartContainer>
        </ViewCartContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
  margin-top: 100px;
`;

const PaymentContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 30px;
`;

const ContactWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const OuterSpan = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-size: 14px;
  width: 500px;
  height: 40px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -4px;
  }
  &:focus {
    outline-color: red;
  }
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FirstInput = styled.input`
  font-size: 14px;
  width: 245px;
  height: 40px;
  margin-right: 10px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -4px;
  }
  &:focus {
    outline-color: red;
  }
`;

const InnerSpan = styled.span`
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 35px;
  transition: 0.2s ease all;
  opacity: 0.6;
  font-size: 0.9rem;
`;

const SecondInput = styled.input`
  font-size: 14px;
  width: 245px;
  height: 40px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -4px;
  }
  &:focus {
    outline-color: red;
  }
`;

const FirstTwoInput = styled.input`
  font-size: 14px;
  width: 160px;
  height: 40px;
  margin-right: 10px;
  font-size: 1rem;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -4px;
  }
  &:focus {
    outline-color: red;
  }
`;

const LastInput = styled.input`
  font-size: 14px;
  width: 160px;
  height: 40px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -4px;
  }
  &:focus {
    outline-color: red;
  }
`;

const BtnWrapper = styled.div`
  margin: 50px 0;
`;

const Btn = styled.button`
  text-transform: none;
  background-color: orange;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  padding: 10px;
  margin-top: 30px;
  color: white;
  box-shadow: 1px 1px 1px 2px #cccccc;
`;

const ViewCartContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 30px;
`;

const CartContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ItemsContainer = styled.div`
  height: 420px;
  overflow: scroll;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

const ImageWrapper = styled.div``;

const ItemImage = styled.img`
  width: 100px;
`;

// default settings - need to test with real items
const Quantity = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ItemName = styled.p`
  width: 300px;
`;

const ItemPrice = styled.p``;

const HeaderTitle = styled.h3`
  margin: 0;
  margin-top: 40px;
  margin-bottom: 10px;
  font-weight: 500;
`;

const Divider = styled.hr`
  border: 0.5px solid black;
  width: 100%;
  margin-top: 20px;
  margin-bottom: -12px;
`;

const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 900;
`;

const SubTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: -30px;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 400;
`;
