import { FastifyInstance } from "fastify";

import discogsController from "../controllers/discogs";

const discogsRoutes = async (app: FastifyInstance) => {
  app.get("/sync/catchup", discogsController.catchupSync);
  app.get("/sync/reset", discogsController.resetSync);
};

export default discogsRoutes;
