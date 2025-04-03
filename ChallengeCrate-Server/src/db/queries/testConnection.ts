import { Sequelize } from "sequelize";

export default async function testConnection(sequelize: Sequelize) {
    try {
        console.log("Attempting connection pulse...");
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        sequelize.close();
    }
}