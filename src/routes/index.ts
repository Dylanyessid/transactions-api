import { Router } from "express";
import userRoutes from "./user.routes";
import transactionRoutes from "./transaction.routes";
const router = Router()


//Definición de las rutas
router.use('/users', userRoutes)
router.use('/transactions', transactionRoutes)

export default router