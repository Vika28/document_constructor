import axios from 'axios';
import {url} from "../URL";

const $api = axios.create({
    baseURL: url
})

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers!.Authorization = `Bearer ${token}`
    }
    return config;
},)
$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        window.location.pathname = "/"
    }
})

export default $api;