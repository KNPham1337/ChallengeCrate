import pg from 'pg';

import { User, sequelize } from "./models/models";

import createDatabaseIfNotExists from "./queries/createDatabase";
import testConnection from "./queries/testConnection";

// import dbConfig from './utils/db_config'
import { config as dbConfig, uri } from './utils/db_config';

export default async function initialDBCheck() {
    // Precursor database creation, connects to default postgres database
    const postgresURI = uri;
    const { Client } = pg;
    const client = new Client(postgresURI);
    await createDatabaseIfNotExists(dbConfig.dbname, client)

    // Pulse Check
    await testConnection(sequelize);
}

// initialDBCheck();