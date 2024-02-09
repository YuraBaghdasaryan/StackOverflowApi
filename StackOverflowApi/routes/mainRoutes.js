const express = require("express");
const MainController = require("../controllers/MainController");
const router = express.Router();

router.get("/", MainController.getAll);
router.get("/:id", MainController.find);
router.get("/search/:text", MainController.search);
router.post("/", MainController.addQuestion);
router.post("/comment", MainController.addComment);
router.patch("/like/:id", MainController.likeQuestion);
router.patch("/comment/like/:id", MainController.likeComment);
router.delete("/:id", MainController.deleteQuestion);
module.exports = router;
