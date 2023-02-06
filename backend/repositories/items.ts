import query from "../../prisma/query";
import prisma from "../../prisma/client";

const getItems = () => query(prisma.item.findMany);

export default { getItems };
