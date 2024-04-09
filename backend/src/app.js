import express from "express"
const app = express()
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

// import routes

import storeRouter from './routes/store.routes.js'
import workerRouter from './routes/worker.routes.js'

//routes declaration

app.use("/api/v1/store", storeRouter);
app.use("/api/v1/worker", workerRouter);
export {app};