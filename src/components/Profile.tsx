import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useProfile from "../hooks/useProfile"
import Holder from "./Holder"
import { postProfile } from "../services/user.service"
import { AxiosError } from "axios"
import { Link } from "react-router-dom"

const Profile = () => {

    const navigate = useNavigate()
    const {user, setUser, loading, error} = useProfile()
    const [inputValue, setInputValue] = useState(user)
    const [msg, setMsg] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    const handleDone = () => setUser(inputValue)
    const handleEdit = () => setInputValue(user)

    const handleSubmit = () => {
        setMsg("Loading...")
        postProfile(user).then(
            () => setMsg("Saved successfully!")
        ).catch(
            (err: AxiosError) => err.response?.data
            ? setMsg(err.response.data)
            : setMsg(err.message)
        )
    }

    useEffect(() => {
        localStorage.getItem("token") ? navigate(location.pathname) : navigate("*")
    }, [])

    return (
        <>
            {
                loading ? (
                    <div className="flex justify-center">
                        <h1> {error} </h1>
                    </div>
                ) : (
                    <>
                        <Holder
                            type="text"
                            label="First Name"
                            value={user.firstName}
                            name="firstName"
                            pattern="[A-Za-z0-9 ]{3,}"
                            title="Must contain at least 3 alphabetic characters"
                            changeHandler={handleChange}
                            doneHandler={handleDone}
                            editHandler={handleEdit}
                        />
                        <Holder
                            type="text"
                            label="Last Name"
                            value={user.lastName}
                            name="lastName"
                            pattern="[A-Za-z0-9 ]{3,}"
                            title="Must contain at least 3 alphabetic characters"
                            changeHandler={handleChange}
                            doneHandler={handleDone}
                            editHandler={handleEdit}
                        />
                        <Holder
                            type="text"
                            label="Username"
                            value={user.username}
                            name="username"
                            pattern="[a-z0-9]{3,}"
                            title="Must contain at least 3 characters, only lowercase letters and numbers"
                            changeHandler={handleChange}
                            doneHandler={handleDone}
                            editHandler={handleEdit}
                        />
                        <Holder
                            type="tel"
                            label="Phone Number"
                            value={user.phoneNumber}
                            name="phoneNumber"
                            pattern="[0-9]{8}"
                            title="Should be a phone number"
                            changeHandler={handleChange}
                            doneHandler={handleDone}
                            editHandler={handleEdit}
                        />
                        <div className="flex justify-center">
                            <button type="submit" className="reg-button" onClick={handleSubmit}>Save</button>
                        </div>
                        <h1> {msg} </h1><br />
                        <Link to="/delete"><u>More options...</u></Link>
                    </>
                )
            }
        </>
    )
}

export default Profile