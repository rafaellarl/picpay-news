import axios from "axios";

const api = axios.create({
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': 'api_live_F4QfFaen0OHRytQn8wcKt5Hqj225hLCztFJxdGmBy8pK'
    },
})

export default api;
