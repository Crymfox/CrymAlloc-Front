import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"

const UserRedirect = () => {
    useEffect(() => {
        setTimeout(() => localStorage.clear())
    }, [])    
    if (localStorage.getItem("delete")) {
        return (
            <div className="flex justify-center">
                Account deleted successfully, back to&nbsp;<u><Link to="/home">home</Link></u>&nbsp;page...
            </div>
        )
    } else return (
        <Navigate to="*" />
    )
}

export default UserRedirect