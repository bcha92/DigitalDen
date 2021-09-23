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
        password: ""
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

        fetch('/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userRegistration)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 200) {
                    // setIsLoaded(true);
                    console.log(data);
                }
            });
        setUserRegistration({ firstName: "", lastName: "", email: "", password: "" });
        formHistory.push("/");
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h3>Register</h3>
                <div>
                    <FieldContainer>
                        <label>First Name</label>
                        <Input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            id="firstName"
                            // required
                            value={userRegistration.firstName}
                            onChange={handleInput} >
                        </Input>
                    </FieldContainer>
                    <FieldContainer>
                        <label>Last Name</label>
                        <Input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            id="lastName"
                            value={userRegistration.lastName}
                            onChange={handleInput} >
                        </Input>
                    </FieldContainer>
                    <FieldContainer>
                        <label>Email</label>
                        <Input
                            type="email"
                            placeholder="Email"
                            name="email"
                            id="email"
                            value={userRegistration.email}
                            onChange={handleInput} >
                        </Input>
                    </FieldContainer>
                    <FieldContainer>
                        <label>Password</label>
                        <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                            id="password"
                            value={userRegistration.password}
                            onChange={handleInput} >
                        </Input>
                    </FieldContainer>
                    <BtnContainer>
                        <button type="submit">Sign Up</button>
                    </BtnContainer>
                </div>
            </Form>
        </>
    );
};

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10vh;
`;

const FieldContainer = styled.div`
display: flex;
margin-top: 15px;
`;

const Input = styled.input`
margin-left: 15px;
`;

const BtnContainer = styled.div`
margin-top: 15px;
`;


