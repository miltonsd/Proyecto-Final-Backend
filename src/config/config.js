require("dotenv").config();
const PORT = process.env.PORT;
//Configs DB
const host = process.env.DB_HOST;
const username = process.env.DB_USER || "root";
const database = process.env.DB_NAME || "pedidosagiles";
const password = process.env.DB_PASS;
const dialect = process.env.DB_TYPE || "mysql";
const logging = false; //es para que no se muestre cada query por consola
//Configs Seeds
const seederStorage = "sequelize";
const seederStorageTableName = "seeds";
//Configs Migrations
const migrationStorage = "sequelize";
const migrationStorageTableName = "migrations";
module.exports = {
PORT,
host,
username,
database,
password,
dialect,
logging,
seederStorage,
seederStorageTableName,
migrationStorage,
migrationStorageTableName,
}