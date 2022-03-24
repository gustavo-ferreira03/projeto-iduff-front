import axios from 'axios'

export const api = axios.create({
    baseURL: "https://projeto-final-2022-1.herokuapp.com"
})