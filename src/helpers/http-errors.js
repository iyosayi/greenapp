export default function makeHttpError({ statusCode, errorMessage }) {
  return {
    headers: {
      "Content-Type": "application/vnd.api+json",
    },
    data: JSON.stringify({
      success: false,
      error: [statusCode],
    }),
  };
}
