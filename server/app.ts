import express, { Request, Response, NextFunction } from 'express';
import http from 'http'
import cors from 'cors'
import userRoutes from './routes/userRoutes'

const app = express(); 
app.use(cors({
    credentials: true
}))

app.use('/status', (req: Request, res: Response, next: NextFunction) => {
    res.send("Ok");
})
 
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})

app.use('/user', userRoutes)

export default app; 