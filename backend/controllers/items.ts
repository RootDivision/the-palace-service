import { FastifyReply, FastifyRequest } from "fastify";

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

export default {
  getItem,
  getItems,
};
