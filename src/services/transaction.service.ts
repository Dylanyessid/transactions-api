
import AppDataSource from "../config/database";
import { Transaction } from "../entites/Transaction";
import { createErrorResponse, createSucessResponse } from "../utils/ResponseMaker";
import { UserService } from "./user.service";


export class TransactionService {
    private static transactionRepository = AppDataSource.getRepository(Transaction);
    

    private static async calculateBalanceOfUser(user_id:number) {
        try {
            let sumDeposits = await this.transactionRepository.sum("amount",{user_id, type: "deposit"}) || 0
            let sumWithdrawals = await this.transactionRepository.sum("amount", {user_id,type: "withdrawal", }) || 0
            return sumDeposits - sumWithdrawals
        } catch (error) {
            return null
        } 
    }


    private static async validateUser(criteria: Record<string, any>) {
        const userService = new UserService();
        const user = await userService.getUserByCriteria(criteria);
        if(!user.isSuccess) return null
        return user;

    }


    static async getTransactionsByUserId(id:number) {
        try {
            const isUser = await this.validateUser({id});
            if(!isUser) return createErrorResponse("El usuario no existe", 404);
            const transactions = await this.transactionRepository.find({where:{"user_id":id}, order:{created_at:"DESC"}});
            if(!transactions.length) return createErrorResponse("No se encontraron transacciones para el usuario solicitado", 404);
            return createSucessResponse(transactions, 200);
        } catch (error) {
            return createErrorResponse("Hubo un error", 500);
        }
    }
    static async createTransaction(user_id:number, amount:number, type:string) {
        try {
            const balance = await this.calculateBalanceOfUser(user_id);
            if(balance===null) return createErrorResponse("Hubo un error", 500);
            if(type === "withdrawal" && balance < amount) return createErrorResponse("Fondos insuficientes para realizar un retiro", 400);
            const isUser = await this.validateUser({id:user_id});
            if(!isUser) return createErrorResponse("El usuario no existe", 404);
            const transaction = new Transaction();
            transaction.user_id = user_id;
            transaction.amount = amount;
            transaction.type = type;
            const result = await this.transactionRepository.save(transaction);
             return createSucessResponse(result, 200);
        } catch (error) {
            return createErrorResponse("Hubo un error", 500);
        }
    }
}