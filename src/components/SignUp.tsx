import { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { signUp } from "../services/auth.service"

type LoadingProps = {
    setLoading: Function
}

const SignUp = ({setLoading}: LoadingProps) => {

    const {form, handleChange} = useAuth('')
    const [msg, setMsg] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.getItem("token") ? navigate("*") : null
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const data = Object.fromEntries(form.entries())
        signUp(data).then(() => {
            setLoading(true)
            navigate('/authredirect')
        }).catch((err: AxiosError) => {
            err.response?.data ? setMsg(err.response.data) : setMsg(err.message)
        })
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h1>First Name:</h1>
                <input
                    type="text"
                    className="ring-1"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                />
                <h1>Last Name:</h1>
                <input
                    type="text"
                    className="ring-1"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                />
                <h1>Phone Number:</h1>
                <input
                    type="tel"
                    pattern="[0-9]{8}"
                    className="ring-1"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                />
                <h1>Username:</h1>
                <input
                    type="text"
                    className="ring-1"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                />
                <h1>Password:</h1>
                <input
                    type="password"
                    className="ring-1"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                /><br />
                <button className="reg-button" onClick={() => setMsg('Loading...')} >Sign Up</button>
                <h1> {msg} </h1>
            </form>
        </div>
    )
}

export default SignUp