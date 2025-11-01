//messageControllers.js
const db = require("../db/queries");

async function getMessages(req, res){
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", { title: "Mini Messageboard", messages });
};
  
async function getForm(req, res){
  res.render("form");
};
  
async function insertMessage(req, res){
  const { user, message } = req.body;
  await db.insertMessage(user, message);
  res.redirect("/");
};

async function deleteAllMessages(req, res){
  await db.deleteAllMessages();
  res.redirect("/");
}
  
module.exports = {
  getMessages,
  insertMessage,
  getForm,
  deleteAllMessages
};
