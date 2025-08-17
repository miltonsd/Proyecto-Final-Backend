require('dotenv').config();

// Configs Seeds
const seederStorage = "sequelize";
const seederStorageTableName = "seeds";

// Configs Migrations
const migrationStorage = "sequelize";
const migrationStorageTableName = "migrations";

module.exports = {
    development: {
        username: process.env.DB_USER || "root",
        password: process.env.DB_PASS || null,
        database: process.env.DB_NAME || "pedidosagiles",
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 3306,
        dialect: process.env.DB_TYPE || "mysql",
        logging: false, // es para que no se muestre cada query por consola
        timezone: process.env.DB_TIMEZONE || '-03:00',
        seederStorage,
        seederStorageTableName,
        migrationStorage,
        migrationStorageTableName,
    },
    production: {
        use_env_variable: "DATABASE_URL", // Railway va a leer esto
        dialect: process.env.DB_TYPE,
        logging: false, // es para que no se muestre cada query por consola
        timezone: process.env.DB_TIMEZONE,
        seederStorage,
        seederStorageTableName,
        migrationStorage,
        migrationStorageTableName,
    },
    test: {}
}