import { check } from "express-validator"

class Validate {
  static signup() {
    return [
      check("lastName", "Last name should be valid.")
        .isString()
        .isLength({ min: 3 }),

      check(
        "email",
        "Invalid email address, example: example@gmail.com."
      ).isEmail(),
      check(
        "password",
        "Password should be provided and must be alphanumeric with atleast 8 charactors."
      ).isLength({ min: 8 }),
    ]
  }

  static userEmail() {
    return [
      check(
        "email",
        "Invalid email address, example: example@gmail.com."
      ).isEmail(),
    ]
  }

  static userRole() {
    return [
      check("role", "Invalid User Role.")
        .isString()
        .isLength({ min: 2 }),
    ]
  }

  static async isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  static async isPasswordValid(password) {
    const passVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    passVal.test(String(password))
  }
}

export default Validate
