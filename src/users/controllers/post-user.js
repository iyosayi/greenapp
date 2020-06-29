import makeHttpError from "../../helpers/http-errors";
export default function makePostUser({ addUser }) {
  return async function postUser(httpRequest) {
    try {
      const { ...userInfo } = httpRequest.body;
      const posted = await addUser({ ...userInfo });
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        data: JSON.stringify(posted),
      };
    } catch (error) {
      return makeHttpError({
        statusCode: 400,
        errorMessage: error.message,
      });
    }
  };
}
