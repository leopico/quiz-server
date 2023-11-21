const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/quiz.routes");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}));

app.use("/", router);

app.use("/test", (req, res) => {
    res.send("This is testing page");
});

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION);
        console.log("Connected to mongodb");
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
    };

    app.listen(port, (e) => {
        if(e) return console.log(e);
        console.log(`Server is running on port ${port}`);
    });
};

startServer();
/*
get /api/quiz
post /api/quiz
*/