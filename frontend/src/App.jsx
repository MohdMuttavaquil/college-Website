import Home from "./Home/Home"
import Navber from "./component/Navber"
import Footer from "./component/Footer"
import Adimission from "./Adimission/Adimission"
import Payment from "./FeePayment/Payment"
import { Route, Routes } from "react-router"
import "./App.css"

function App() {

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
