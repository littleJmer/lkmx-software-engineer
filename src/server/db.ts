import { Sequelize } from "sequelize";

const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;

const sequelize = new Sequelize(`postgres://${db_user}:${db_pass}@${db_host}:${db_port}/${db_name}`);

async function testConnection() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false, alter: true });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}; testConnection();

export default sequelize

