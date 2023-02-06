import { FastifyInstance } from "fastify";
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
  app.get("/item/:id", itemSchema, itemController.getItem);
  app.post("/item", addItemSchema, itemController.addItem);
  app.delete("/item/:id", deleteItemSchema, itemController.deleteItem);
  app.put("/item/:id", updateItemSchema, itemController.updateItem);
};

export default itemRoutes;
