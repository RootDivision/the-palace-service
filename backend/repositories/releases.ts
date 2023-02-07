import query from "../../prisma/query";
import prisma from "../../prisma/client";

const addRelease = (data: any) => query(prisma.release.create(data));

const addReleases = (data: any) => query(prisma.release.createMany(data));

const getReleases = () => query(prisma.release.findMany());

export default {
  addRelease,
  addReleases,
  getReleases,
};
