import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user.controller";
import { createTransaction, getTransactionsByUserId } from "../controllers/transaction.controller";
import validateDTO from "../middlewares/validateDTOs";
import { CreateTransactionDto } from "../dto/createTransaction.dto";

const router = Router()

router.get('/:user_id', getTransactionsByUserId)
router.post('/', validateDTO(CreateTransactionDto) ,createTransaction)

export default router