import { FastifyInstance } from "fastify";

import discogsController from "../controllers/discogs";

const discogsRoutes = async (app: FastifyInstance) => {
  app.get("/discogs", discogsController.sync);
};

export default discogsRoutes;
