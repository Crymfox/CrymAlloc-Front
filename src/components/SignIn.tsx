import useAuth from "../hooks/useAuth"
import { useState, useEffect } from "react"
import { signIn } from "../services/auth.service"
import { Link, useNavigate } from "react-router-dom"
import { AxiosError } from "axios"

const SignIn = () => {
    const {form, handleChange} = useAuth('login')
    const [msg, setMsg] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.getItem("token") ? navigate("*") : null
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        signIn(data).then((res: any) => {
            localStorage.setItem('id', res.data.id)
            localStorage.setItem('token', res.data.token)
            location.replace("/")
        }).catch((err: AxiosError) => {
            err.response?.data ? setMsg(err.response.data) : setMsg(err.message)
        })
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h1>Username:</h1>
                <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                />
                <h1>Password:</h1>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                /><br />
                <button
                    type="submit"
                    className="reg-button"
                    onClick={() => setMsg('Loading...')}
                >Sign In</button>
                <Link to="*"><u>Forgot password?</u></Link><br />
                <h1> {msg} </h1>
            </form>
        </div>
    )
}

export default SignIn
