import express from "express"
import { addGuess, updateResult } from "../controller/guessController.js"
import { guessValidator } from "../middlewares/guessMiddleware.js"
const router = express.Router()

router.post("/guesses", guessValidator, addGuess)
router.put("/guess/:id", updateResult)

export default router
