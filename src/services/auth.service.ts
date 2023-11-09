import axios from "axios"

export const signIn = async (data: Object) => await axios({
    method: 'post',
    url: 'http://localhost:5000/auth/signin',
    data
})

export const signUp = async (data: Object) => await axios({
    method: 'post',
    url: 'http://localhost:5000/auth/signup',
    data
})