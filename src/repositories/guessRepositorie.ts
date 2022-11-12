import { connection } from "../database/database.js"

const insertGuess = (
  username: string,
  firstTeam: string,
  secondTeam: string,
  winner: string
) => {
  return connection.query(
    `INSERT INTO guesses (username,"firstTeam", "secondTeam", winner) VALUES ($1, $2, $3, $4);`,
    [username, firstTeam, secondTeam, winner]
  )
}

export { insertGuess }
