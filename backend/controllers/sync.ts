import { FastifyReply, FastifyRequest } from "fastify";

import { parseReleaseForSave } from "../utils/utils";
import syncService from "../services/sync";
import releaseService from "../services/releases";

const catchupSync = async (req: FastifyRequest, reply: FastifyReply) => {
  const { per_page, sort, sort_order } = req.query;

  let discogsReleases: any = [];
  let dbReleases: any = [];
  let hasNext = true;
  let page = 0;

  try {
    dbReleases = await releaseService.getReleases();

    while (hasNext) {
      page += 1;
      const { pagination, releases } = await syncService.fetchDiscogsCollection(
        { params: { page, per_page, sort, sort_order } }
      );
      discogsReleases = [...discogsReleases, ...releases];
      hasNext = page < pagination.pages;
      console.log(`Syncing ${page} of ${pagination.pages}`);
    }

    const newReleases = parseReleaseForSave(discogsReleases, dbReleases);

    if (newReleases.length <= 0) {
      reply.send({ message: "No items to sync" });
      return;
    }

    await releaseService.addReleases({ data: newReleases });
    reply.send({ message: "New items added", newReleases });
  } catch (err) {
    reply.send(err);
  }
};

const resetSync = async (req: FastifyRequest, reply: FastifyReply) => {
  // todo
  reply.send("ResetSync");
};

export default {
  catchupSync,
  resetSync,
};
