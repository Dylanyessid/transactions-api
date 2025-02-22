import { DataSource } from "typeorm";
import { User } from "../entites/User";
import envs from "./envs";
import { Transaction } from "../entites/Transaction";

const {dbHost, dbName, dbPassword, dbPort, dbUser} = envs

//Configuración de la base de datos
 const AppDataSource = new DataSource({
    type: "postgres",
    host: dbHost,
    port: Number(dbPort) || 5432,
    username: dbUser,
    password: dbPassword,
    database: dbName,
    entities: [User, Transaction],
    synchronize: false,
    logging: false,
});

//Conexión a la base de datos
export const connectToDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database connected");
    } catch (error) {
        console.log("Error connecting to database", error);
    }
}


export default AppDataSource;
