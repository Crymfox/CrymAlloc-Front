import Container from "./components/Container"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { Routes, Route } from "react-router-dom"
import AllCars from "./components/AllCars"
import AvailableCars from "./components/AvailableCars"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Footer from "./components/Footer"
import NotAvailable from "./components/NotAvailable"
import LoggedIn from "./components/LoggedIn"
import AuthRedirect from "./components/AuthRedirect"
import Profile from "./components/Profile"
import { useState } from "react"
import Header from "./components/Header"
import Delete from "./components/Delete"
import UserRedirect from "./components/UserRedirect"
import "./App.css"

const App = () => {
  const [loading, setLoading] = useState(false)
  return (
    <Container>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LoggedIn/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/allcars" element={<AllCars/>} />
        <Route path="/availablecars" element={<AvailableCars/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp setLoading={setLoading} />} />
        <Route path="/authredirect" element={<AuthRedirect loading={loading} />} />
        <Route path="/delete" element={<Delete/>} />
        <Route path="/userredirect" element={<UserRedirect/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<NotAvailable/>} />
      </Routes>
      <Footer/>
    </Container>
  )
}

export default App