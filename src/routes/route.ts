import express from "express"
import {
  addGuess,
  deleteGuess,
  getGuessesRank,
  updateResult
} from "../controller/guessController.js"
import { guessValidator } from "../middlewares/guessMiddleware.js"
const router = express.Router()

router.post("/guesses", guessValidator, addGuess)
router.put("/guess/:id", updateResult)
router.delete("/guess/:id", deleteGuess)
router.get("/guesses", getGuessesRank)

export default router
