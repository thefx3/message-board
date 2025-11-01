const { Router } = require("express");
const router = Router();
const messageController = require("../controllers/messageController");

router.get("/", messageController.getMessages);
router.get("/new", messageController.getForm);
router.post("/new", messageController.insertMessage);

router.get("/delete", messageController.deleteAllMessages)

module.exports = router;
