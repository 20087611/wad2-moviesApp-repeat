import React, { useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const PrivateRoute = props => {
  const context = useContext(AuthContext)
  // Destructure props from <privateRoute> 
  const { component: Component, ...rest } = props;
  console.log(props.location)
  return context.isAuthenticated === true ? ( // check status, if not log in, redirect to login page
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: props.location }
      }}
    />
  );
};

export default PrivateRoute;