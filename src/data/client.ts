import axios from "axios";

// const api = axios.create({
// 	baseURL: "http://localhost:3333"
// });

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_DATABASE
});

export default api;
