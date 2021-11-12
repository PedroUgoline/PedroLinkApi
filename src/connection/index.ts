import { createConnection } from "typeorm";


export const createConnectionToDB = async () => {

    console.info('Connecting with database');
    await createConnection();
    console.info('Connection successfull')
};