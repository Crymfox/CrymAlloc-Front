import { Link } from "react-router-dom"

const NotAvailable = () => {
    return (
        <div>
            <h1 className="text-2xl">Service not available.</h1>
            <Link to="/" className="underline">Back to home page</Link>
        </div>
    )
}

export default NotAvailable