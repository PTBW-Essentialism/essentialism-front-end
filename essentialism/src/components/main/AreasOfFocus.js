import React, {useEffect, useState} from "react";
import axios from "axios";


const AreasOfFocus = (props) => {
    const [userFocus, setUserFocus] = useState([])
    console.log(props.match.params);

    useEffect(() => {
        axios
        .get('https://essentialapi.herokuapp.com/users/:id/focus')
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return(
        <div>
            <p>test</p>
        </div>
    )

}

export default AreasOfFocus;