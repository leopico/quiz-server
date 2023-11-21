const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
    question: {
        type: String,
        require: true
    },
    answers: [
        {
            answer: {
                type: String,
                require: true
            },
            isCorrect: {
                type: Boolean,
                require: true
            }
        }

    ]
});


const Quiz = mongoose.model("quiz", QuizSchema);

module.exports = { Quiz };



/*

 get /api/quiz

 [
    {
        "question": "where is myanmar located",
        "answers": [
            {"answer": "Asia", isCorrect:true},
            {"answer": "Europe", isCorrect:false},
            {"answer": "Some", isCorrect:false}
        ]
    }
 ]

*/