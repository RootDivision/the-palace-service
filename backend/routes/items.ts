import { FastifyInstance, FastifySchema } from "fastify";
import itemController from "../controllers/items";
import {
  addItemSchema,
  deleteItemSchema,
  itemSchema,
  itemsSchema,
  updateItemSchema,
} from "../validations/items";

const itemRoutes = async (app: FastifyInstance) => {
  app.get("/items", itemsSchema, itemController.getItems);
  app.get("/items/:id", itemSchema, itemController.getItem);
  app.post("/items", addItemSchema, itemController.addItem);
  app.delete("/items/:id", deleteItemSchema, itemController.deleteItem);
  app.put("/items/:id", updateItemSchema, itemController.updateItem);
};

export default itemRoutes;
