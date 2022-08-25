// import "../css/LoginStyle.css";
import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";

const LoginPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }
  return (
    <>
      <p>You must log in to view the protected pages </p>
      <input id="username" placeholder="username" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button onClick={login}>Log in</button>
      <p>Not Registered?
      <Link to="/signup">Sign Up!</Link></p>
    </>
  );
};

export default LoginPage;



// const LoginPage = () => {
//     const [errorMessages, setErrorMessages] = useState({});
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     // User Login info
//     const users = [
//         {
//             username: "user1",
//             password: "pass1"
//         },
//         {
//             username: "user2",
//             password: "pass2"
//         }
//     ];

//     const errors = {
//         uname: "invalid username",
//         pass: "invalid password"
//     };

//     const handleSubmit = (event) => {
//         //Prevent page reload
//         event.preventDefault();

//         var { uname, pass } = document.forms[0];

//         // Find user login info
//         const userData = users.find((user) => user.username === uname.value);

//         // Compare user info
//         if (userData) {
//             if (userData.password !== pass.value) {
//                 // Invalid password
//                 setErrorMessages({ name: "pass", message: errors.pass });
//             } else {
//                 // Authentication passed ***
//                 setIsSubmitted(true);
//             }
//         } else {
//             // Username not found
//             setErrorMessages({ name: "uname", message: errors.uname });
//         }
//     };

//     // Generate JSX code for error message
//     const renderErrorMessage = (name) =>
//         name === errorMessages.name && (
//             <div className="error">{errorMessages.message}</div>
//         );

//     // JSX code for login form
//     const renderForm = (
//         <div className="form">
//             <form onSubmit={handleSubmit}>
//                 <div className="input-container">
//                     <label>Username </label>
//                     <input type="text" name="uname" required />
//                     {renderErrorMessage("uname")}
//                 </div>
//                 <div className="input-container">
//                     <label>Password </label>
//                     <input type="password" name="pass" required />
//                     {renderErrorMessage("pass")}
//                 </div>
//                 <div className="button-container">
//                     <input type="submit" />
//                 </div>
//             </form>
//         </div>
//     );

//     return (
//         <div className="app">
//             <div className="login-form">
//                 <div className="title">Sign In</div>
//                 {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//             </div>
//         </div>
//     );
// };

// export default LoginPage;