import axios from 'axios'

export const api = axios.create({
    baseURL: "https://projeto-final-equipe1.herokuapp.com/"
})