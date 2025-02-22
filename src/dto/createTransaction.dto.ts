import { IsIn, IsNumber, IsPositive } from "class-validator";

export class CreateTransactionDto {
    
    @IsNumber()
    user_id: number;

    @IsNumber()
    @IsPositive()
    amount: number;
    //concept: string;

    @IsIn(['withdrawal', 'deposit'])
    type: string;
}