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
  origin: "https://college-website-liard.vercel.app/",
  //origin: "http://localhost:3000/",
  methods: ['GET, POST']
}
))

app.use("/api", ragRoute)
app.use("/api", payRoute)


app.get('/', (req, res) => {
  console.log("server start")
  res.send('Hello World!')
})

app.get('/update', (req, res) =>{
  res.send("file updateds add server test in CI CD pipeline, ckecks the status on EC2 server")
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})