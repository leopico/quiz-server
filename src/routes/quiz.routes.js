const express = require("express");
const router = express.Router();
const { getQuiz, storeQuiz } = require("../controllers/quiz.controller")


router.route("/api/quiz").get(getQuiz);
router.route("/api/quiz").post(storeQuiz);


module.exports = router;