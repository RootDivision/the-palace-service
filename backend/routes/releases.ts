import { FastifyInstance } from "fastify";
import itemController from "../controllers/releases";
import {
  addReleaseSchema,
  releasesSchema,
  deleteItemSchema,
  itemSchema,
  updateItemSchema,
} from "../validations/releases";

const itemRoutes = async (app: FastifyInstance) => {
  app.post("/release", addReleaseSchema, itemController.addRelease);
  app.get("/releases", releasesSchema, itemController.getReleases);

  app.get("/item/:id", itemSchema, itemController.getItem);
  app.delete("/item/:id", deleteItemSchema, itemController.deleteItem);
  app.put("/item/:id", updateItemSchema, itemController.updateItem);
};

export default itemRoutes;
