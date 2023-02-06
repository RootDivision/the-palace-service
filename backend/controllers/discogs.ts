import { FastifyReply, FastifyRequest } from "fastify";

import discogsService from "../services/discogs";

const sync = async (req: FastifyRequest, reply: FastifyReply) => {
  //do a call to the discogs service, which calls the discogs API
  // sync the logic here
  // store it in the localdatabase
  try {
    
    const result = await discogsService.fetchDiscogsCollection();
    console.log("result: ", result);
  } catch (err) {
    console.log(err);
  }

  reply.send({ message: `sync started` });
};

export default {
  sync,
};
