import { FastifyReply, FastifyRequest } from "fastify";

import query from "../../prisma/query";
import prisma from "../../prisma/client";

// import discogsService from "../services/discogs";
// const result = await discogsService.fetchDiscogsCollection();

const sync = async (req: FastifyRequest, reply: FastifyReply) => {
  try {




  } catch (err) {
    console.log(err);
  }

  reply.send({ message: `sync started` });
};

export default {
  sync,
};
