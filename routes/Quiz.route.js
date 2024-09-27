const {Router} = require("express")
const { createQuiz, getAllQuizzes, getQuizById, submitQuiz } = require("../controllers/Quiz.controller")
const quizRoute = Router()


quizRoute.post("/create" , createQuiz)
quizRoute.get("/getall" , getAllQuizzes)
quizRoute.get("/:id" , getQuizById)
quizRoute.post("/submit/:id" , submitQuiz)


module.exports = quizRoute