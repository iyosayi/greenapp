import makeHttpError from "../../helpers/http-errors";

export default function makePostTask({ addTask }) {
  return async function postTask(httpRequest) {
    try {
      const { ...taskInfo } = httpRequest.body;
      const posted = await addTask({ ...taskInfo });
      return {
        headers: {
          "Content-Type": "application/vnd.api+json",
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
