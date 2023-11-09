import { AxiosError } from "axios"
import { useState, useEffect } from "react"
import { getProfile } from "../services/user.service"

type User = {
    firstName: string,
    lastName: string,
    username: string,
    phoneNumber: string
}

const useProfile = () => {
    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        username: '',
        phoneNumber: ''
    })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('Loading...')
    useEffect(() => {
        getProfile()
        .then((res: any) => {
            setUser(res.data)
            setLoading(false)
        })
        .catch((err: AxiosError) => err.response?.data
        ? setError(err.response.data)
        : setError(err.message))
    }, [])
    return {user, setUser, loading, error}
}

export default useProfile