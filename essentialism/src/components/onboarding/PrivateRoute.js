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
        // Remember FOR EACH ROUTE YOU CAN ONLY HAVE 1 OF TYPE RENDER OR COMPONENT
        // this is why we use rest operator here
        <Route {...rest} render={(props) => {
            if (token) {
                // return the component
                return <Component {...props} />
            } else {
                // redirects the user to login
                return <Redirect to="/" />
            }
        }} />
    )
}

  export default PrivateRoute;