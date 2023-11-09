import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
    const [select, setSelect] = useState(location.pathname)
    const selectHome = () => setSelect("/home")
    const selectAllcars = () => setSelect("/allcars")
    const selectAvailablecars = () => setSelect("/availablecars")
    const selectProfile = () => setSelect("/profile")
    const selectSignin = () => setSelect("/signin")
    const selectSignup = () => setSelect("/signup")
    const selector = (path: string, opt?:string) : string => `nav-link ${
        select === path || select === opt ? 'bg-red-400' : 'bg-red-500'
    }`
    return (
        <div className="flex flex-wrap px-3 mb-2 bg-red-500 text-white">
            <Link to={
                localStorage.getItem("token") ? '/' : '/home'
            } className={selector('/', '/home')} onClick={selectHome}>Home</Link>
            <Link to="allcars" className={selector('/allcars')} onClick={selectAllcars}>All Cars</Link>
            <Link to="/availablecars" className={selector('/availablecars')} onClick={selectAvailablecars}>Available Cars</Link>
            <div className="ml-auto"></div>
            {
                localStorage.getItem("token") ? (
                    <>
                        <Link to="/profile" className={selector('/profile')} onClick={selectProfile}>Profile</Link>
                        <button className="nav-link" onClick={
                            () => {
                                localStorage.clear()
                                window.location.pathname === "/allcars" || window.location.pathname === "/availablecars"
                                ? location.reload()
                                : location.replace("/home")
                            }
                        } >Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/signin" className={selector('/signin')} onClick={selectSignin}>Sign In</Link>
                        <Link to="/signup" className={selector('/signup')} onClick={selectSignup}>Sign Up</Link>
                    </>
                )
            }
        </div>
    )
}

export default Navbar