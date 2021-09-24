import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

export const LogInOut = ({ setLoginData, userLogIn, setUserLogIn }) => {

    // variable to hold page route using history
    const formHistory = useHistory();

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name, value)

        setUserLogIn({ ...userLogIn, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLogIn)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 200) {
                    setLoginData(data)
                }
            });
        setUserLogIn({ email: "", password: "" });
        formHistory.push("/");
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div>
                    <FieldContainer>
                        <label>Email</label>
                        <Input
                            type="email"
                            placeholder="Email"
                            name="email"
                            id="email"
                            onChange={handleInput}
                            value={userLogIn.email}
                        >
                        </Input>
                    </FieldContainer>
                    <FieldContainer>
                        <label>Password</label>
                        <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                            id="password"
                            onChange={handleInput}
                            value={userLogIn.password}
                        >
                        </Input>
                    </FieldContainer>
                    <BtnContainer>
                        <button type="submit">Log in</button>
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
