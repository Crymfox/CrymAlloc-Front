import { Link, Navigate } from "react-router-dom"

type LoadingProps = {
    loading: boolean
}

const AuthRedirect = ({loading}: LoadingProps) => {
    if (loading) {
        return (
            <div className="flex justify-center">
                Account created successfully, proceed to&nbsp;<u><Link to="/signin">login</Link></u>&nbsp;page...
            </div>
        )
    } else return (
        <Navigate to="*" />
    )
}

export default AuthRedirect