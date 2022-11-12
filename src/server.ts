import express from "express"
import router from "./routes/route.js"
import dotenv from "dotenv"
dotenv.config()

const server = express()
server.use(express.json())
server.use(router)
server.listen(process.env.PORT, () =>
  console.log(`listen on ${process.env.PORT}`)
)
