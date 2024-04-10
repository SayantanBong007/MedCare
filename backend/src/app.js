import express from "express"
const app = express()
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

// import routes

import storeRouter from './routes/store.routes.js'
import workerRouter from './routes/worker.routes.js'
import messageRouter from './routes/message.routes.js'
import medicineRouter from './routes/medicines.routes.js'
import reviewRouter from './routes/reviews.routes.js'
import userRouter from './routes/user.routes.js'
import reciptRouter from './routes/payment.routes.js'
//routes declaration

app.use("/api/v1/user",userRouter);
app.use("/api/v1/store", storeRouter);
app.use("/api/v1/worker", workerRouter);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/medicine",medicineRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/reciept",reciptRouter);

export {app};