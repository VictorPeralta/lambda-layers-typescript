import { getFirstLetter } from "opt/nodejs/utils"

export const handler =  async (event: any) => {

    const response = {
        statusCode: 200,
        body: getFirstLetter("Hello World")
    }

    return response;
  }