// import React, { useState } from "react";
// import { useHistory } from "react-router";
// import styled from "styled-components";

// export const LogInOut = async () => {
//     const [user, setUser] = useState();

//     // variable to hold page route using history
//     const formHistory = useHistory();

//     const [userLogIn, setUserLogIn] = useState({
//         email: "",
//         password: ""
//     });

//     const handleInput = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;

//         setUserLogIn({ ...userLogIn, [name]: value })
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         // history.push("/");

//         fetch('/users/login')
//             .then((res) => res.json())
//             .then((data) => {
//                 setUser(data)
//             })
//     };


//     return (
//         <>
//             <Form onSubmit={handleSubmit}>
//                 <div>
//                     <h3>Login</h3>
//                     <FieldContainer>
//                         <label>Email</label>
//                         <Input
//                             type="email"
//                             placeholder="Email"
//                             name="email"
//                             id="email"
//                             value={userLogIn.email}
//                             onChange={handleInput} >
//                         </Input>
//                     </FieldContainer>
//                     <FieldContainer>
//                         <label>Password</label>
//                         <Input
//                             type="password"
//                             placeholder="Password"
//                             name="password"
//                             id="password"
//                             value={userLogIn.email}
//                             onChange={handleInput} >
//                         </Input>
//                     </FieldContainer>
//                     <BtnContainer>
//                         <button type="submit">Log in</button>
//                     </BtnContainer>
//                 </div>
//             </Form>
//         </>
//     )
// };

// const Form = styled.form`
// display: flex;
// flex-direction: column;
// align-items: center;
// margin-top: 10vh;
// `;

// const FieldContainer = styled.div`
// display: flex;
// margin-top: 15px;
// `;

// const Input = styled.input`
// margin-left: 15px;
// `;

// const BtnContainer = styled.div`
// margin-top: 15px;
// `;
