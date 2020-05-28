import React from "react"
import {GET_USER_ID, SET_USER_ID} from "./Types";

const initialState = {
    userId: ""
}

export const Reducer = (state = initialState, action) => {
    console.log(action)

    switch(action.type) {
        case SET_USER_ID:
            return {
                ...state, userId: action.payload
            }
        case GET_USER_ID:
            return state.userId
    }
}