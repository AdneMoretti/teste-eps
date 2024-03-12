import app from '../app'
import { Request, Response, NextFunction } from 'express'
import { response, RequestHandler } from 'express'

export const createUser = (req: Request, res: Response): RequestHandler => {
    res.send("create user")
}

export const getUser = (req: Request, res: Response) : void => {
    res.send("get user"); 
}
// app.use('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send("Ok");
// })