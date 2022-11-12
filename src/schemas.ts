import Joi from "joi"

const validator = (schema) => (payload) => schema.validate(payload)

const guessSchema = Joi.object({
  username: Joi.string().required(),
  firstTeam: Joi.string().required(),
  secondTeam: Joi.string().required(),
  winner: Joi.string().required()
})

const guessValidation = validator(guessSchema)

export { guessValidation }
