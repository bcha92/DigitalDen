import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

export const Checkout = ({ tax, setTax }) => {
  const [province, setProvince] = useState("");
  // const [cartInfo, setCartInfo] = useState()
  const cartItems = JSON.parse(localStorage.getItem("productInfo"));
  const formHistory = useHistory();
  let subtotal = 0;

  // useEffect(() => {
  //   setCartInfo(JSON.parse(localStorage.getItem("productInfo"))
  // }, [])

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "province") {
      setProvince(event.target.value);
    }
    setUserInfo({ ...userInfo, [name]: value });
  };

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    surname: "",
    email: "",
    address: "",
    city: "",
    province: "",
    phone: "",
    country: "",
    creditCard: "",
    expiry: "",
    total: (Number(subtotal) + Number(tax)).toFixed(2),
    cart: cartItems
  });
  console.log((Number(subtotal) + Number(tax)).toFixed(2), 'TOALLLLLL')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo, ' order info')

    fetch('/order', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, ' fetch adta')
        if (data.status === 201) {
          if (localStorage.getItem("order") === null) {
            localStorage.setItem("order", JSON.stringify([]))
          }
          const ordersList = JSON.parse(localStorage.getItem("order"))
          ordersList.push(data)
          localStorage.setItem("order", JSON.stringify(ordersList))
          localStorage.setItem("confirmation", JSON.stringify(data))
        } else {
          return
        }
      })
      .catch((error) => {
        console.log(error)
      })

    // setUserLogIn({ ... });
    localStorage.setItem("productInfo", JSON.stringify([]))
    formHistory.push("/confirmation");
  }

  // Provincial Taxes
  useEffect(() => {
    // 15% // NL / NB / NS / PE
    if ("newfoundland".includes(province.toLowerCase()) ||
      province.toUpperCase() === "NL" ||
      "new brunswick".includes(province.toLowerCase()) ||
      province.toUpperCase() === "NB" ||
      "nova scotia".includes(province.toLowerCase()) ||
      province.toUpperCase() === "NS" ||
      "prince edward island".includes(province.toLowerCase()) ||
      province.toUpperCase() === "PE") {
      setTax((Number(subtotal) * 0.15).toFixed(2));
    }
    // 14.975% // QC
    else if ("quebec".includes(province.toLowerCase()) ||
      province.toUpperCase() === "QC") {
      setTax((Number(subtotal) * 0.14975).toFixed(2));
    }
    // 13% // ON
    else if ("ontario".includes(province.toLowerCase()) ||
      province.toUpperCase() === "ON") {
      setTax((Number(subtotal) * 0.13).toFixed(2));
    }
    // 12% // BC / MB
    else if ("british columbia".includes(province.toLowerCase()) ||
      province.toUpperCase() === "BC" ||
      "manitoba".includes(province.toLowerCase()) ||
      province.toUpperCase() === "MB") {
      setTax((Number(subtotal) * 0.12).toFixed(2));
    }
    // 11% // SK
    else if ("saskatchewan".includes(province.toLowerCase()) ||
      province.toUpperCase() === "SK") {
      setTax((Number(subtotal) * 0.11).toFixed(2));
    }
    // 5% // AB / NT / NU / YK
    else if ("alberta".includes(province.toLowerCase()) ||
      province.toUpperCase() === "AB" ||
      "northwest territories".includes(province.toLowerCase()) ||
      province.toUpperCase() === "NT" ||
      "nunavut".includes(province.toLowerCase()) ||
      province.toUpperCase() === "NU" ||
      "yukon territory".includes(province.toLowerCase()) ||
      province.toUpperCase() === "YT") {
      setTax((Number(subtotal) * 0.05).toFixed(2));
    }
    else {
      setTax((Number(subtotal) * 0.15).toFixed(2));
    }
  }, [province, setTax, subtotal])


  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <ContactWrapper>
            <HeaderTitle>Contact Information</HeaderTitle>
            <InputDiv>
              <OuterSpan>
                <Input
                  className="inputText"
                  type="text"
                  required
                  name="email"
                  id="email"
                  onChange={handleInput}
                  value={userInfo.email} />
                <InnerSpan className="floating-label">Email</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <HeaderTitle>Shipping Address</HeaderTitle>
            <InputRow>
              <InputDiv>
                <OuterSpan>
                  <FirstInput
                    className="inputText"
                    type="text"
                    required
                    name="firstName"
                    id="firstName"
                    onChange={handleInput}
                    value={userInfo.firstName}
                  />
                  <InnerSpan className="floating-label">First name</InnerSpan>
                </OuterSpan>
              </InputDiv>
              <InputDiv>
                <OuterSpan>
                  <SecondInput className="inputText"
                    type="text"
                    required
                    name="surname"
                    id="surname"
                    onChange={handleInput}
                    value={userInfo.address} />
                  <InnerSpan className="floating-label">Last name</InnerSpan>
                </OuterSpan>
              </InputDiv>
            </InputRow>
            <InputDiv>
              <OuterSpan>
                <Input
                  className="inputText"
                  type="text"
                  required
                  name="address"
                  id="address"
                  onChange={handleInput}
                  value={userInfo.address} />
                <InnerSpan className="floating-label">Address</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputRow>
              <InputDiv>
                <OuterSpan>
                  <FirstTwoInput className="inputText"
                    type="text"
                    required
                    name="city"
                    id="city"
                    onChange={handleInput}
                    value={userInfo.city} />
                  <InnerSpan className="floating-label">City</InnerSpan>
                </OuterSpan>
              </InputDiv>
              <InputDiv>
                <OuterSpan>
                  <FirstTwoInput
                    className="inputText"
                    type="text"
                    onChange={handleInput}
                    required
                    name="province"
                    id="province"
                    value={userInfo.province}
                  />
                  <InnerSpan className="floating-label">Province</InnerSpan>
                </OuterSpan>
              </InputDiv>
              <InputDiv>
                <OuterSpan>
                  <LastInput
                    className="inputText"
                    type="text"
                    required
                    name="country"
                    id="country"
                    onChange={handleInput}
                    value={userInfo.country} />
                  <InnerSpan className="floating-label">Country</InnerSpan>
                </OuterSpan>
              </InputDiv>
            </InputRow>
            <InputDiv>
              <OuterSpan>
                <Input
                  className="inputText"
                  type="text"
                  required
                  name="phone"
                  id="phone"
                  onChange={handleInput}
                  value={userInfo.phone} />
                <InnerSpan className="floating-label">Phone</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputRow>
              <InputDiv>
                <OuterSpan>
                  <FirstInput
                    className="inputText"
                    type="text"
                    required
                    name="creditCard"
                    id="creditCard"
                    onChange={handleInput}
                    value={userInfo.creditCard} />
                  <InnerSpan className="floating-label">
                    Credit card number
                  </InnerSpan>
                </OuterSpan>
              </InputDiv>
              <InputDiv>
                <OuterSpan>
                  <SecondInput className="inputText"
                    type="text"
                    required
                    name="expiry"
                    id="expiry"
                    onChange={handleInput}
                    value={userInfo.expiry} />
                  <InnerSpan className="floating-label">Expiry date</InnerSpan>
                </OuterSpan>
              </InputDiv>
            </InputRow>
            <ConfirmBtn type="submit" value="Confirm Payment"> Confirm order </ConfirmBtn>
          </ContactWrapper>
        </Form>
        <ViewCartContainer>
          <CartContainer>
            <ItemsContainer>
              {cartItems.map(item => {
                if (item.price.slice(1,).length > 7) {
                  let num = item.price.slice(1,).split(",").join("");
                  subtotal += Number(num).toFixed(2) * item.quantity * 100 / 100;
                }
                else {
                  subtotal += Number(item.price.slice(1,)).toFixed(2) * item.quantity * 100 / 100
                }
                return (
                  <ItemContainer key={item._id}>
                    <ImageWrapper>
                      <ItemImage src={item.imageSrc} alt={item._id} />
                    </ImageWrapper>
                    <Quantity>{item.quantity}</Quantity>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>{item.price}</ItemPrice>
                  </ItemContainer>
                )
              })}
            </ItemsContainer>
            <Divider />
            <SubTotal>
              <p>Subtotal</p>
              <p>CAD ${subtotal.toFixed(2)}</p>
            </SubTotal>
            <SubTotal>
              <p>Shipping</p>
              <p>Free</p>
            </SubTotal>
            <SubTotal>
              <p>Tax</p>
              <p>CAD ${tax}</p>
            </SubTotal>
            <Divider />
            <Total>
              <p>Total</p>
              <p>CAD ${(Number(subtotal) + Number(tax)).toFixed(2)}</p>
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

const Form = styled.form`
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

const ConfirmBtn = styled.button`
  text-transform: none;
  width: 150px;
  height: 50px;
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
