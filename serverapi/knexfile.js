module.exports = {
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "admin",
  },
  migrations: {
    tablename: "knex_mogrations",
  },
};
