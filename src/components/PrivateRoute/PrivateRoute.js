import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { contexUser } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [SignInUser, setSignInUser] = useContext(contexUser)
    return (
        <Route
        {...rest}
        render={({ location }) =>
          SignInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;