import { AxiosError, AxiosResponse } from "axios"
import { useState, useEffect } from "react"
import { getAllCars, getAvailableCars } from "../services/car.service"

export type Car = {
    id: number,
    mat: string,
    type: string,
    color: string,
    price: string,
    alloc: boolean
}

const useCar = (choice: string) => {
    const [cars, setCars] = useState<Car[]>([])
    const [error, setError] = useState('Loading...')
    const getCars =  choice === 'all' ? getAllCars : getAvailableCars
    useEffect(() => {
        getCars()
        .then((res: AxiosResponse) => setCars(res.data))
        .catch((err: AxiosError) => err.response?.data ? setError(err.response.data) : setError(err.message))
    }, [])
    return {cars, error}
}

export default useCar