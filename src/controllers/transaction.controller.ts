import { Request, Response } from "express";
import { TransactionService } from "../services/transaction.service";


export const createTransaction = async(req:Request, res:Response) => {
    const {user_id, amount, type} = req.body
    const result = await TransactionService.createTransaction(user_id, amount, type)
    res.status(result.status).json(result)
    return;
}

export const getTransactionsByUserId = async(req:Request, res:Response) => {
    const {user_id} = req.params
    const result = await TransactionService.getTransactionsByUserId(parseInt(user_id))
    res.status(result.status).json(result)
    return;
}
