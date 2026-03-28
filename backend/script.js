import express from 'express'
import 'dotenv/config'
import dbConnectio from './Config/Database.js'
import ragRoute from './Routes/ragistrationRoute.js'
import cors from "cors"
import payRoute from './Routes/paymentRoute.js'

const app = express()
const PORT = process.env.PORT || 3000

dbConnectio()

app.use(express.json())
 
app.use(cors({
  origin: "https://college-website-liard.vercel.app",
  //origin: "http://localhost:5173",
  methods: ['GET, POST']
}
))

app.use("/api", ragRoute)
app.use("/api", payRoute)


app.get('/', (req, res) => {
  console.log("server start")
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})