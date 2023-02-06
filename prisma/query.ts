import { PrismaPromise } from "@prisma/client";
import prisma from "./client";

const query = async (query: () => PrismaPromise<{}>) => {
  try {
    prisma.$connect();
    const response = await query();

    return response;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

export default query;
