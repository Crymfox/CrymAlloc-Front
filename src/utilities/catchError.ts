import { AxiosError } from "axios"

const catchError = (err: AxiosError, setError: Function) => err.response?.data
? setError(err.response.data)
: setError(err.message)

export default catchError