import { FastifyReply, FastifyRequest } from "fastify";
import { uuid } from "uuidv4";

import releaseService from "../services/releases";

import { items } from "../../data";

const getReleases = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const releases = await releaseService.getReleases();
    reply.send({ releases });
  } catch (err) {
    reply.send(err);
  }
};

const addRelease = async (
  req: FastifyRequest<{ Body: { data: {} } }>,
  reply: FastifyReply
) => {
  const { data } = req.body;

  try {
    await releaseService.addRelease({ data: { ...data } });
    reply.code(201).send("release added");
  } catch (err) {
    reply.send(err);
  }
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
  addRelease,
  getReleases,
  deleteItem,
  getItem,
  updateItem,
};
