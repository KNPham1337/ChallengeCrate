import pg from 'pg';

export default async function createDatabaseIfNotExists(dbname: string, client: pg.Client) {
    try {
        await client.connect();

        const res = await client.query("SELECT 1 FROM pg_database WHERE datname = $1", [dbname]);

        if (res.rowCount === 0) {
            await client.query(`CREATE DATABASE ${dbname}`);
            console.log(`Database "${dbname}" created successfully.`);
        } else {
            console.log(`Database "${dbname}" already exists.`);
        }
    } catch (err) {
        console.error(err);
    } finally {
        await client.end();
    }
}