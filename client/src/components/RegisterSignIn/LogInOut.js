import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

export const LogInOut = ({ setLoginData, userLogIn, setUserLogIn }) => {
  const formHistory = useHistory();

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserLogIn({ ...userLogIn, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogIn),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setLoginData(data);
        }
      });
    setUserLogIn({ email: "", password: "" });
    formHistory.push("/");
  };

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <h3 style={{ marginBottom: "15px" }}>Login</h3>
          <div>
            <FieldContainer>
              <label>Email:</label>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                onChange={handleInput}
                value={userLogIn.email}
              ></Input>
            </FieldContainer>
            <FieldContainer>
              <label>Password:</label>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={handleInput}
                value={userLogIn.password}
              ></Input>
            </FieldContainer>
            <BtnContainer>
              <Button type="submit">Log in</Button>
            </BtnContainer>
          </div>
        </Form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
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
