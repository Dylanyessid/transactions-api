import 'dotenv/config'
import Joi from 'joi'


//Validación de las variables de entorno en el .env
const envsSchema = Joi.object({
    PORT:Joi.number().required(),
    DB_HOST:Joi.string().required(),
    DB_USER:Joi.string().required(),
    DB_PASSWORD:Joi.string().required(),
    DB_NAME:Joi.string().required(),
    DB_PORT:Joi.number().required(),
}).unknown(true)

interface IEnvVars {
    PORT:number,
    DB_HOST:string,
    DB_USER:string,
    DB_PASSWORD:string,
    DB_NAME:string,
    DB_PORT:number,
}

//Se validan con Joi
const {error, value} = envsSchema.validate(process.env);

if(error){
    throw new Error(`Config validation error: ${error.message}`);
}  

//En caso exitoso, se exportan las variables al resto del proyecto
const envVars: IEnvVars = value
const envs ={
    port: envVars.PORT,
    dbHost:envVars.DB_HOST,
    dbUser:envVars.DB_USER,
    dbPassword:envVars.DB_PASSWORD,
    dbName:envVars.DB_NAME,
    dbPort:envVars.DB_PORT,
    
}

export default envs