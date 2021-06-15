const { Client } = require("pg");

const client = new Client({
  user: "jocpfilzyhxotw",
  host: "ec2-54-90-211-192.compute-1.amazonaws.com",
  database: "d6g82gskp94q87",
  password: "7b84573efb43a8761a804983966d7a1c416a2283d121a7ee84ea201abb513a10",
  port: 5432,
});

client.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Connect to postgreSQL");
});

module.exports = client;
