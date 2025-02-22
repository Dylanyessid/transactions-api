import { plainToInstance } from "class-transformer"
import { validate } from "class-validator"
import { NextFunction, Request, Response } from "express"


//Middleware que valida los DTOs de las peticiones
const validateDTO = (dto:any) =>{
    return async (req:Request, res:Response, next:NextFunction) =>{
        const output = plainToInstance(dto, req.body)
        const errors = await validate(output)
        if(errors.length > 0){
            res.status(400).json({errors})
            return 
        }
        req.body = output
        next()
    }
}

export default validateDTO