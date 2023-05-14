require('dotenv').config();

// Config Puerto Backend
const PORT = process.env.PORT;

// Configs DB
const host = process.env.DB_HOST;
const username = process.env.DB_USER || "root";
const database = process.env.DB_NAME || "pedidosagiles";
const password = process.env.DB_PASS;
const dialect = process.env.DB_TYPE || "mysql";
const logging = false; // es para que no se muestre cada query por consola
const timezone = process.env.DB_TIMEZONE || '-03:00';

// Configs Seeds
const seederStorage = "sequelize";
const seederStorageTableName = "seeds";

// Configs Migrations
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
    timezone,
    seederStorage,
    seederStorageTableName,
    migrationStorage,
    migrationStorageTableName,
}