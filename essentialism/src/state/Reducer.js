import React from "react"
import {SET_USER_ID} from "./Types";

const initialState = {
    userId: null
}

const Reducer = (state = initialState, action) => {
    console.log(action)

    switch(action.type) {
        case SET_USER_ID:
            return {
                userId: action.payload
            }

        default: return state
    }
}

export default Reducer;