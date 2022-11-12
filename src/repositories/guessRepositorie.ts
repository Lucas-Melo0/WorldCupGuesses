import { connection } from "../database/database.js"
import { QueryResult } from "pg"
import { Guess } from "../protocols/guess.js"

const insertGuess = (guess: Guess): Promise<QueryResult> => {
  return connection.query(
    `INSERT INTO guesses (username,"firstTeam", "secondTeam", winner) VALUES ($1, $2, $3, $4);`,
    [guess.username, guess.firstTeam, guess.secondTeam, guess.winner]
  )
}

const updateGuess = (id: number) => {
  return connection.query(
    `UPDATE guesses SET "correctGuess" = true WHERE id = $1`,
    [id]
  )
}

const guessDeletion = (id: number) => {
  return connection.query(`DELETE FROM guesses WHERE id = $1`, [id])
}

const getGuesses = () => {
  return connection.query(
    `SELECT username,COUNT("correctGuess") AS "correctGuesses" FROM guesses GROUP BY "username" ORDER BY "correctGuesses" DESC;`
  )
}

export { insertGuess, updateGuess, guessDeletion, getGuesses }
