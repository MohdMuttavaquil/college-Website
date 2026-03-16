import Home from "./Home/Home"
import Navber from "./component/Navber"
import Footer from "./component/Footer"
import Adimission from "./Adimission/Adimission"
import Payment from "./FeePayment/Payment"
import { Route, Routes, useContext } from "react-router"
import { StoreContext } from "./Appcontext/StoreContext"
import "./App.css"
import { useEffect } from "react"
import axios from 'axios'

function App() {

  const { url } = useContext(StoreContext)
  const startServer = async () => {
    await axios.get(`${url}`)
  }

  useEffect(() => {
    startServer()
  }, [])

  return (
    <>
      <Navber />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Adimisson" element={<Adimission />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
