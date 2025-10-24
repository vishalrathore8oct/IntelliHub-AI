import express from "express"
import cors from "cors"
import "dotenv/config"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("IntelliHub-AI Server is Running!")
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

