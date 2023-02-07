import { FastifyInstance } from "fastify";

import syncController from "../controllers/sync";

const syncRoutes = async (app: FastifyInstance) => {
  app.get("/sync/catchup", syncController.catchupSync);
  app.get("/sync/reset", syncController.resetSync);
};

export default syncRoutes;
