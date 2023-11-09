import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AlloCard from "./AlloCard"
import useAlloc from "../hooks/useAlloc"
import Welcome from "./Welcome"

const LoggedIn = () => {
    
    const navigate = useNavigate()
    
    useEffect(() => {
        localStorage.getItem("token") ? null : navigate("/home")
    }, [])

    const {allocations, error, loading} = useAlloc()

    return (
        <>
            <Welcome/>
            {
                !loading
                ? allocations.length
                    ? allocations.map((data, key) => {
                        return (
                            <AlloCard
                                id={data.id}
                                key={key}
                                car={data.car.type}
                                startDate={data.startDate}
                                endDate={data.endDate}
                                confirmed={data.confirmed}
                            />
                        )
                    })
                    : <h1 className="flex justify-center">No requests found.</h1>
                : <h1 className="flex justify-center"> {error} </h1>
            }
        </>
    )
}

export default LoggedIn