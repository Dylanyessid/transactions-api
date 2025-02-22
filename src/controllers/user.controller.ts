import { Request, Response } from "express";
import AppDataSource from "../config/database";
import { User } from "../entites/User";
import { UserService } from "../services/user.service";

const userService = new UserService()

//Controlador que se encarga de crear un usuario
export const createUser = async(req:Request, res:Response) => {
 
    const {name, email} = req.body
    const result = await userService.createUser(name, email)
    res.status(result.status).json(result)
    return;
    
}
//Controlador que se encarga de obtener todos los usuarios
export const getAllUsers = async(req:Request, res:Response) => {
 
    const result = await userService.getAllUsers()
    res.status(result.status).json(result)
    return;
    
}