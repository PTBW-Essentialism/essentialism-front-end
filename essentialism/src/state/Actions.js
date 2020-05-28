import {GET_USER_ID, SET_USER_ID} from "./Types";

export const setUserId = (item) => {
    console.log(item);
    return{
        type: SET_USER_ID,
        payload: item
    };
}

export const getUserId = () => {
    return{
        type: GET_USER_ID
    };
}