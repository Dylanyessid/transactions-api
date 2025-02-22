import AppDataSource from "../config/database";
import { User } from "../entites/User";
import {
  createErrorResponse,
  createSucessResponse,
} from "../utils/ResponseMaker";
import { createUser } from "./../controllers/user.controller";

//Servicio que se conecta con la base de datos para realizar las operaciones con la entidad
export class UserService {
  userRepository = AppDataSource.getRepository(User);

  
  async getAllUsers() {
    try {
      const users = await this.userRepository.find();
      return createSucessResponse(users, 200);
    } catch (error) {
      return createErrorResponse("Hubo un error", 500);
    }
  }


  
  async getUserByCriteria(criteria: Record<string, any>) {
    try {
      const user = await this.userRepository.findOne({ where: criteria });

        if (!user) {
            return createErrorResponse("El usuario no existe", 404); 
        }

      return createSucessResponse(user, 200); 
    } catch (error) {
      return createErrorResponse("Hubo un error", 500); 
    }
  }


  async createUser(name: string, email: string) {
    try {
      const result = await this.getUserByCriteria({ email });
      if (result.isSuccess) {
        return createErrorResponse("El usuario ingresado ya existe", 404);
      }

      const user = new User();
      user.name = name;
      user.email = email;
      await this.userRepository.save(user);
      return createSucessResponse(user, 201);
    } catch (error) {
      return createErrorResponse("Hubo un error", 500);
    }
  }
}
