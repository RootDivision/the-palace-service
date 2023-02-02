import { FastifyReply, FastifyRequest } from "fastify";

import {items} from "../data";

const getItems = async (req: FastifyRequest, reply: FastifyReply) => {
  await reply.send(items);
};

const getItem = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id = req.params.id;
  const item = items.find((item) => item.id === id);
  console.log("item: ", item);

  reply.send(item);
};

export default {
  getItem,
  getItems,
};
