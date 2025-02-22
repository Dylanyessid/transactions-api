import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user.controller";
import validateDTO from "../middlewares/validateDTOs";
import { CreateUserDTO } from "../dto/createUser.dto";

const router = Router()

router.get('/', getAllUsers)
router.post('/', validateDTO(CreateUserDTO) ,createUser)

export default router