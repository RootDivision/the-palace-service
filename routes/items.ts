import { FastifyInstance, FastifySchema } from "fastify";
import itemController from "../controllers/items";
import itemValidations from "../validations/items";

const itemRoutes = (
  app: FastifyInstance,
  options: FastifySchema,
  done: () => void
) => {
  app.get("/items", itemValidations.validateItems, itemController.getItems);
  app.get("/items/:id", itemValidations.validateItem, itemController.getItem);
  done();
};

export default itemRoutes;
