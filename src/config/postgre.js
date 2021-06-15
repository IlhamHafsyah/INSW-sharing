const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "perusahaan",
  password: "1234",
  port: 5432,
});

client.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Connect to postgreSQL");
});

module.exports = client;
