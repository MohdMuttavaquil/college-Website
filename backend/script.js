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
app.use(cors())

app.use("/api", ragRoute)
app.use("/api", payRoute)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})