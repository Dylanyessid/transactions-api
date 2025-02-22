import { IsIn, IsNumber, IsPositive } from "class-validator";

//DTO para la creación de transacciones
export class CreateTransactionDto {
    
    @IsNumber()
    user_id: number;

    @IsNumber()
    @IsPositive()
    amount: number;
    

    @IsIn(['withdrawal', 'deposit'])
    type: string;
}