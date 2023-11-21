const { Quiz } = require("../models/QuizSchema.js");

const getQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.find({}, {"_id":1, "question":1, "answers":1});
        return res.status(200).send(quiz);
    } catch (error) {
        res.status(400).send(error.message);
        console.error(error);
    };
};

const storeQuiz = async (req, res) => {
    // console.log(req.body);
    try {
        const quiz = new Quiz(req.body);
        await quiz.save();
        return res.status(200).json(quiz);
    } catch (error) {
        res.status(400).send(error.message);
        console.error(error);
    }
};

module.exports = { getQuiz, storeQuiz };