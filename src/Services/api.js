import axios from "axios";


export const baseURL = "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments";
export const api = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
})