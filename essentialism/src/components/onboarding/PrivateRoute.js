import React from "react"
import {Route, Redirect} from "react-router-dom";

/*
Private Route Rules
1. it has the same API as Route
2. It renders a <Route /> and passes all the props through to it
3. it checks if the user is authenticated, if they are, it renders the "component" prop.
   If not, it redirects the user to /login
*/ 

// Must rename component to Component
const PrivateRoute = ({component: Component, ...rest}) => {
    const token = window.localStorage.getItem('token')
    return(
        <Route {...rest} render={(props) => {
            if (token) {
                return <Component {...props} />
            } else {
                return <Redirect to="/" />
            }
        }} />
    )
}

  export default PrivateRoute;