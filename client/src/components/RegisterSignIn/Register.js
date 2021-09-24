import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

export const Register = () => {
  // variable to hold page route using history
  const formHistory = useHistory();

  // empty strings which will be updated with user data
  const [userRegistration, setUserRegistration] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // tracking user input value when typing
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // updates userRegistration with name and value entered
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  // once user submits data, data will be sent as POST
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userRegistration),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          // setIsLoaded(true);
          console.log(data);
        }
      });
    setUserRegistration({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    formHistory.push("/");
  };

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <h3 style={{ marginBottom: "15px" }}>Register</h3>
          <div>
            <FieldContainer>
              <label>First Name:</label>
              <Input
                type="text"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                // required
                value={userRegistration.firstName}
                onChange={handleInput}
              ></Input>
            </FieldContainer>
            <FieldContainer>
              <label>Last Name:</label>
              <Input
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                value={userRegistration.lastName}
                onChange={handleInput}
              ></Input>
            </FieldContainer>
            <FieldContainer>
              <label>Email:</label>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={userRegistration.email}
                onChange={handleInput}
              ></Input>
            </FieldContainer>
            <FieldContainer>
              <label>Password:</label>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={userRegistration.password}
                onChange={handleInput}
              ></Input>
            </FieldContainer>
            <BtnContainer>
              <Button type="submit">Sign Up</Button>
            </BtnContainer>
          </div>
        </Form>
      </Wrapper>
    </>
  );
};

// const Form = styled.form`
// display: flex;
// flex-direction: column;
// align-items: center;
// margin-top: 10vh;
// `;
const Wrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  padding: 20px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 400px;
  width: 400px;
  margin-top: 100px;
`;

const FieldContainer = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
`;

const Input = styled.input`
  margin-left: 15px;
  border: none;
  border-bottom: 1px solid grey;
`;

const BtnContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
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
