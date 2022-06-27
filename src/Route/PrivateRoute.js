import React from 'react';
import { Redirect, Route } from 'react-router';
import { isLogin } from '../Container/Utilities/Index';

function PrivateRoute({ component : Component , ...rest }) {
    return (
        <Route {...rest} render={props => (
            isLogin() ? 
                <Component {...props} />
                : <Redirect to={"/auth1"} />
        )}
 
        />
    );
}

export default PrivateRoute;