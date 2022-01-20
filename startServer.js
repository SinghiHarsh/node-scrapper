'use strict'

import ConstantModel from "./constants"
const { SERVER_CONSTANTS } = ConstantModel

const startServer = async (app) => {
  try {
    // Start Listening on Configured Port
    await app.listen(SERVER_CONSTANTS.PORT)
    console.log('[Info] Server Started Successfully')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export default startServer