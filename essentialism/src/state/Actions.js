import React from "react";
import {SET_USER_ID} from "./Types";

export const setUserId = item => {
    console.log(item);
    return {
        type: SET_USER_ID,
        payload: item
    }
}
