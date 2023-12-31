import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({limit:'50mb'}))

app.use('api/user', userRoutes);

const startServer = async () =>{
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(process.env.PORT, ()=> console.log(`Server corriendo en http://localhost:${process.env.PORT}`))
    } catch (error) {
        console.log(error)
    }
    
}
startServer()