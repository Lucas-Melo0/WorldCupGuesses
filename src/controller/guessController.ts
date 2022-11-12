import { Request, Response } from "express"
import {
  getGuesses,
  guessDeletion,
  insertGuess,
  updateGuess
} from "../repositories/guessRepositorie.js"

const addGuess = async (req: Request, res: Response) => {
  try {
    const { username, firstTeam, secondTeam, winner } = req.body

    await insertGuess({ username, firstTeam, secondTeam, winner })

    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

const updateResult = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    await updateGuess(id)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

const deleteGuess = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    await guessDeletion(id)
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

const getGuessesRank = async (req: Request, res: Response) => {
  try {
    const rank = await (await getGuesses()).rows
    res.send(rank).status(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export { addGuess, updateResult, deleteGuess, getGuessesRank }
