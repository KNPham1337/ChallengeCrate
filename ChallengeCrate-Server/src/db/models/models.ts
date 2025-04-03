import { Sequelize } from "sequelize";
import { uri } from "../utils/db_config";

import { initUserModel, User } from "./schemas/User";


// Create sequelize instance
const sequelize = new Sequelize(uri);

// Inititialize models
initUserModel(sequelize);

// Define Associations

// Sync database (use migrations in production)
const syncDB = async () => {
    // Change force to true to drop tables too
    await sequelize.sync({ force: false })
}

export { sequelize, User, syncDB };