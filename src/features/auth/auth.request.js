// import { failureLogin, requestLogin, successLogin } from './auth.actions';
// import axios from 'axios'
// import API from '../../app/api'


// const API_URL = 'http://localhost:3001/api/v1';
// const axios = require('axios')

// export const loginApi = async (email, password) => {
//     const response = await fetch(`${API_URL}/login/`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             email,
//             password,
//         }),
//     });
//     if (!response.ok) {
//         throw new Error('Login failed.');
//     }
//     const data = await response.json();
//     return data.access;
// }


// export const loginApi = async (email, password) => {
//     try {
//         axios
//             .post(`${API.baseURL}/user/login/`, { email, password })
//         //     .then((response) => response.data)
//         //     .then((response) => console.log(response.data))
//         // successLogin()
//     }
//     catch (error) {
//         failureLogin()
//     }
// }