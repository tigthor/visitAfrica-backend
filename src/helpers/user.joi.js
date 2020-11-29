import Joi from "@hapi/joi"

const userVal = (req, res, next) => {
  const userSchema = Joi.object({
    fullname: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().required(),
    password: Joi.required(),
    birthdate: Joi.string(),
    tel: Joi.string()
      .trim()
      .regex(/^[0-9]{7,10}$/)
      .required()
      .label("phone must be 10 characters and  between 0-9 numbers "),
    country: Joi.string().min(4).max(10).required(),
    city: Joi.string().min(3).max(6).required(),
  })
}

export default userVal
