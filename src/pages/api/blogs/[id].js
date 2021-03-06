import { backEndApi } from "../../../api/axios";
import { BACKEND_ROUTES } from "../../../constants/backendRoutes";

export default async function handler(req, res) {
  // console.log("🚀 --- handler --- req", req.method);
  //Get blog
  if (req.method === "GET") {
    try {
      // const payload = { ...req.body };
      const id = req.query.id;

      // const status = 200;
      // const data = blogs.find((item) => item.id === id);

      const { status, data } = await backEndApi.get(BACKEND_ROUTES.blogs, {
        params: { id },
      });

      res.status(status).json(data);
    } catch (error) {
      // console.log("🚀 --- Blog ID --- error", error.response);
      const errorMessage = error.response.data;
      res.status(error.response.status).json(errorMessage);
    }
  }
  //Edit Blog
  if (req.method === "PUT") {
    try {
      const payload = { ...req.body.data };
      const token = req.body.token;

      // console.log("🚀 --- handler --- payload", payload);
      // const id = req.body.id;

      // const data = blogs.find((item) => item.id === id);

      const { status, data } = await backEndApi.put(
        BACKEND_ROUTES.blogs,
        payload,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      res.status(status).json(data);
    } catch (error) {
      // console.log("🚀 --- Blog ID --- error", error.response);
      const errorMessage = error.response.data;
      res.status(error.response.status).json(errorMessage);
    }
  }
  //Delete blog
  if (req.method === "DELETE") {
    try {
      const id = req.query.id;
      const token = req.query.token;

      const { status, data } = await backEndApi.delete(BACKEND_ROUTES.blogs, {
        headers: { Authorization: "Bearer " + token },
        params: { id },
      });

      res.status(status).json(data);
    } catch (error) {
      // console.log("🚀 --- Delete blog --- error", error.response);
      const errorMessage = error.response.data;
      res.status(error.response.status).json(errorMessage);
    }
  }
}
