import makeHttpError from "../../helpers/http-errors";

export default function makeDeleteTask({ removeTask }) {
  return async function deleteTask(httpRequest) {
    const { _id } = httpRequest.params;
    try {
      const taskToDeleted = await removeTask({ _id });
      return {
        headers: {
          "Content-Type": "application/vnd.api+json",
          statusCode: 200,
        },
      };
    } catch (error) {
      return makeHttpError({
        statusCode: 400,
        errorMessage: error.message,
      });
    }
  };
}
