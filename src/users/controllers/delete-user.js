import makeHttpError from "../../helpers/http-errors";

export default function makeDeleteUser({ removeUser }) {
  return async function deleteUser(httpRequest) {
    const { _id } = httpRequest.params;
    try {
      const deleted = await removeUser({ _id });
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
      };
    } catch (error) {
      return makeHttpError({
        statusCode: 400,
        errorMessage: error.message,
      });
    }
  };
}
