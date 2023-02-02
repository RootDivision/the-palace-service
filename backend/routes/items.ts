import { FastifyInstance, FastifySchema } from "fastify";
import itemController from "../controllers/items";
import { addItemSchema, itemSchema, itemsSchema } from "../validations/items";

const itemRoutes = async (app: FastifyInstance, options: FastifySchema) => {
  app.get("/items", itemsSchema, itemController.getItems);
  app.get("/items/:id", itemSchema, itemController.getItem);
  app.post("/item", addItemSchema, itemController.addItem);
};

export default itemRoutes;
