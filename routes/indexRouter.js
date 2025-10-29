const { Router } = require("express");
const router = Router();
const messageController = require("../controllers/messageController");

router.get("/", messageController.getMessages);
router.get("/new", messageController.getForm);
router.post("/new", messageController.postMessage);

module.exports = router;
