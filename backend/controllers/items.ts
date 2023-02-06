import { FastifyReply, FastifyRequest } from "fastify";
import { uuid } from "uuidv4";

import itemService from "../services/items";

import { items } from "../../data";

const getItems = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const items = await itemService.getItems();
    console.log("items: ", items);
    reply.send(items);
  } catch (err) {
    console.log(err);
  }
};

const addItem = (
  req: FastifyRequest<{ Body: { name: string } }>,
  reply: FastifyReply
) => {
  const { name } = req.body;
  const item = { id: uuid(), name: name };

  //add the item to the database
  reply.code(201).send(item);
};

const getItem = (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const {
    params: { id },
  } = req;

  const item = items.find((item) => item.id === id);

  reply.send(item);
};

const deleteItem = (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const { id } = req.params;

  //delete the item from the database
  reply.send({ message: `Item ${id} has been removed` });
};

const updateItem = (
  req: FastifyRequest<{
    Params: { id: string };
    Body: {
      name: string;
    };
  }>,
  reply: FastifyReply
) => {
  const { id } = req.params;
  const { name } = req.body;

  //update the item from the database
  reply.send({ message: `Item updated` });
};

export default {
  addItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
};
