import axios from "axios";

// Url base que o axios vai consumir em toda a aplicação

const api = axios.create({
    baseURL: "http://localhost:5000"
});

export default api;