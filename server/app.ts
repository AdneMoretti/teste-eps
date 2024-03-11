import express, { Request, Response, NextFunction } from 'express';


const app = express(); 

app.use((req: Request, res: Response, next: NextFunction) => {
    res.send("Ok");
})
 
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})

export default app; 