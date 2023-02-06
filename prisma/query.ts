import { PrismaPromise, Release } from "@prisma/client";

import prisma from "./client";

const query = async (query: PrismaPromise<Release | Release[]>) => {
  try {
    prisma.$connect();
    return query;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

export default query;
