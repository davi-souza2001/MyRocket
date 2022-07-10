import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3333"
});

// const api = axios.create({
//     baseURL: "https://apimyrocket-production.up.railway.app/"
// });

export default api;
