import axios from "axios";

// Url base que o axios vai consumir em toda a aplicação

// const api = axios.create({
//     baseURL: "http://localhost:3333"
// });

const api = axios.create({
    baseURL: "https://apimyrocket-production.up.railway.app/"
});

export default api;
