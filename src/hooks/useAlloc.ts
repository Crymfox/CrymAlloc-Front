import { AxiosError, AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { getHistoryById } from "../services/user.service"
import { getCarById } from "../services/car.service"
import catchError from "../utilities/catchError"
import { Car } from "../hooks/useCar"

type allocation = {
    id: number,
    car: Car,
    user: number | string,
    startDate: Date,
    endDate: Date,
    allocated: boolean,
    confirmed: boolean
}

const useAlloc = () => {
    const [allocations, setAllocations] = useState<allocation[]>([])
    const [error, setError] = useState('Loading...')
    const [loading, setLoading] = useState(true)

    // const changeAlloc = (allocations: allocation[]): allocation[] => {
    //     for (let element of allocations) {
    //         getCarById(element.car).then((res: AxiosResponse) => {
    //             element.car = res.data
    //         }).catch((err: AxiosError) => catchError(err, setError))
    //     }
    //     return allocations
    // }

    useEffect(() => {
        getHistoryById().then((res: AxiosResponse) => {
            setAllocations(res.data)
            setLoading(false)
            // setAllocations(changeAlloc(allocations))
        }).catch((err: AxiosError) => catchError(err, setError))
    }, [])

    return {allocations, error, loading}
}

export default useAlloc