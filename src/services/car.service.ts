import axios from "axios"

export const getAllCars = async () => await axios({
    method: 'get',
    url: 'http://localhost:5000/car/all',
})

export const getAvailableCars = async () => await axios({
    method: 'get',
    url: 'http://localhost:5000/car/free'
})

export const getCarById = async (id: number | string) => await axios({
    method:'get',
    url: `http://localhost:5000/car/${id}`
})

export const getLastAllocation = async (id: number) => await axios({
    method:'get',
    url: `http://localhost:5000/car/getlast/${id}`
})