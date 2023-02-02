import { FastifyReply, FastifyRequest } from "fastify";
import { uuid } from "uuidv4";

import { items } from "../../data";

const getItems = (req: FastifyRequest, reply: FastifyReply) => {
  reply.send(items);
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

const addItem = (
  req: FastifyRequest<{ Body: { name: string } }>,
  reply: FastifyReply
) => {
  const { name } = req.body;
  const item = { id: uuid(), name: name };

  reply.send(item);
};

export default {
  addItem,
  getItem,
  getItems,
};
