import express from "express"
import cors from "cors"
import "dotenv/config"
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from "./routes/ai.routes.js"



const app = express()

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())


app.get("/", (req, res) => {
    res.send("IntelliHub-AI Server is Running!")
})

app.use(requireAuth())

app.use("/api/ai", aiRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

