import { IsEmail, IsNotEmpty, IsString } from "class-validator";

//DTO para la creación de usuarios
export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

}