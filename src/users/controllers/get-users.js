import makeHttpError from "../../helpers/http-errors";

export default function makeGetUsers({ listUsers }) {
  return async function getUser(httpRequest) {
    try {
      const { _id } = httpRequest.params;
      const { max, before, after } = httpRequest.query;
      const postUsers = await listUsers({ _id, max, before, after });
      return {
        headers: {
          "Content-Type": "application/json",
          statusCode: 200,
          data: JSON.stringify(postUsers),
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
