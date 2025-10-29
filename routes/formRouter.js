//formRouter.js
const { Router } = require("express");
const formRouter = Router();

formRouter.get("/new", (req, res) => {
    res.render("form")
})

module.exports = formRouter;