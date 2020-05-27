import React, {useEffect, useState} from "react";
import axios from "axios";


const AreasOfFocus = () => {
    const [userFocus, setUserFocus] = useState([])

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

        </div>
    )

}

export default AreasOfFocus;