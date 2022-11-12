import { Request, Response } from "express"
import { insertGuess } from "../repositories/guessRepositorie.js"

const addGuess = async (req: Request, res: Response) => {
  try {
    const { username, firstTeam, secondTeam, winner } = req.body

    await insertGuess(username, firstTeam, secondTeam, winner)

    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export { addGuess }
