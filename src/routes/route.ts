import express from "express"
import { addGuess } from "../controller/guessController.js"
import { guessValidator } from "../middlewares/guessMiddleware.js"
const router = express.Router()

router.post("/guesses", guessValidator, addGuess)

export default router
