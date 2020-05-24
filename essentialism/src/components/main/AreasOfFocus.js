import React, {useEffect, useState} from "react";
import axios from "axios";

const AreasOfFocus = () => {
    const [areasOfFocus, setAreasOfFocus] = useState([])

    useEffect(() => {
        axios
        .get("https://essentialapi.herokuapp.com/values")
        .then((res) => {
            console.log(res)
            setAreasOfFocus(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return(
        <div>
            {areasOfFocus.map((value) => {
                return(
                    <div>
                        <p>{value.name}</p>
                        <p>{value.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AreasOfFocus