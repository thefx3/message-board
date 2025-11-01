const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function insertMessage(user, msg) {
    await pool.query(
      "INSERT INTO usernames (username, messages, added) VALUES ($1, $2, $3)",
      [user, msg, new Date()]
    );
  }
  
async function deleteAllMessages() {
    const { rows } = await pool.query("DELETE FROM usernames");
    console.log(rows);
    return rows; 
}

module.exports = {
    getAllMessages,
    insertMessage,
    deleteAllMessages
};

