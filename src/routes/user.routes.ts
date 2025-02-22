import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user.controller";
import validateDTO from "../middlewares/validateDTOs";
import { CreateUserDTO } from "../dto/createUser.dto";


//Definición de las rutas
const router = Router()

router.get('/', getAllUsers)
router.post('/', validateDTO(CreateUserDTO) ,createUser)

export default router