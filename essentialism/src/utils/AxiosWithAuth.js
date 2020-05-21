import axios from "axios"

export const axiosWithAuth = () => {
    //get token from local storage
    const token = window.localStorage.getItem('token');
    //create a new instance of axios with the config object
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: "http://localhost:5000"
    });
};