import { guessValidation } from "../schemas.js"
import { Request, Response, NextFunction } from "express"

const guessValidator = (req: Request, res: Response, next: NextFunction) => {
  const { error } = guessValidation(req.body)
  if (error) return res.status(422).send(error.message)
  next()
}

export { guessValidator }
