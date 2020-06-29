import makeHttpError from "../../helpers/http-errors";

export default function makePatchUsers({ editUser }) {
  return async function patchUser(httpRequest) {
    try {
      const { ...userInfo } = httpRequest.body;
      const patched = await editUser({ ...userInfo });
      return {
        headers: {
          "Content-Type": "application/json",
          statusCode: 200,
          data: JSON.stringify(patched),
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
