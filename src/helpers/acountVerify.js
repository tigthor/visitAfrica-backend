import models from "../database/models"

const accountVerify = async (email) => {
  try {
    const emailExists = await models.User.update(
      { isVerified: true },
      { where: { email } }
    )
    return emailExists
  } catch (error) {
    return error
  }
}

export default accountVerify
