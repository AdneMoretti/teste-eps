import app from '../app'
import { Router, Request, Response } from 'express'
import { createUser, getUser } from  '../controller/UserController'

const route = Router(); 


route.post('/', createUser); 
route.get('/', getUser)


export default route; 