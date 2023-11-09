import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    useEffect(() => {
        localStorage.getItem("token") ? navigate("/") : null
    }, [])

    return (
        <div className="flex flex-col">
            <h1 className="text-2xl mx-auto mb-10">Welcome to home page</h1>
            <h1 className="mx-auto">Our service is to allocate cars, enjoy everyone!</h1>
            <h1 className="mx-auto">Please <Link to="/signup"><u>Sign Up</u></Link> to use our service,</h1>
            <h1 className="mx-auto">Or <Link to="/signin"><u>Sign In</u></Link> if u already have an account.</h1>
        </div>
    )
}

export default Home