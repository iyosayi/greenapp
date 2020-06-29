export default function makeExpressCallback(controller) {
  return (req, res) => {
    const httpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: {
        "Content-Type": req.get("Content-Type"),
      },
    };
    controller(httpRequest)
      .then((httpResponse) => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers);
        }
        res.type("json");
        res.status(httpResponse.statusCode).send(httpResponse.data);
      })
      .catch((error) => res.status(error.statusCode || 500).end());
  };
}
