#! /usr/bin/env node
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  messages TEXT,
  added TIMESTAMP
);

INSERT INTO usernames (username, messages, added) 
VALUES
  ('Bryan', 'Hi my name is Bryan', NOW()),
  ('Odin', 'Merry Christmas', NOW()),
  ('Damon', 'I dont want to write anything', NOW());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://newuser:Windows7FX!@localhost:5432/users_board",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("✅ Done");
}

main();
