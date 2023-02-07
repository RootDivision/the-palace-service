import { FastifyReply, FastifyRequest } from "fastify";
import discogsService from "../services/discogs";
import releaseService from "../services/releases";

const params = {
  token: "OwixZEStNCoDmzXIUbFuWGwboAemYPllalZiiYtT",
  // page: 1,
  per_page: 200,
  sort: "added",
  sort_order: "desc",
};

const sync = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    let results: any[] = [];
    let next = true;
    let page = 0;

    while (next) {
      page += 1;
      const { pagination, releases } =
        await discogsService.fetchDiscogsCollection({
          params: { ...params, page },
        });
      console.log("page: ", page);
      results = results.concat(releases);
      console.log("results: ", results.length);
      next = page < pagination.pages;

      console.log(next);
    }

    // const mapped = results.map(({ id, instance_id, date_added, rating }) => ({
    //   id,
    //   // instance_id,
    //   // date_added,
    //   // rating,
    // }));
    const mapped = results.map(({ id, instance_id, date_added, rating }) => id);


    
    const toFindDuplicates = mapped => mapped.filter((item, index) => mapped.indexOf(item) !== index)
    const duplicateElements = toFindDuplicates(mapped);
    console.log(duplicateElements);


    
    // console.log(mapped);

    // releaseService.addReleases({
    //   data: [...mapped],
    // });

    reply.send(duplicateElements);
    // reply.send({
    //   message: `sync completed`,
    //   releases: results,
    // });
  } catch (err) {
    console.log(err);
  }
};

export default {
  sync,
};
