import axios from 'axios'


const $host = axios.create({ // Запрос не требущий авторизации
    baseURL: process.env.REACT_APP_API_URL
})

export {$host}