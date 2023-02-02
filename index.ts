import fastify, { FastifyInstance } from "fastify";

import itemRoutes from "./backend/routes/items";

const app: FastifyInstance = fastify({ logger: true });

app.register(itemRoutes);

const start = async () => {
  try {
    await app.listen({ port: 8080 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
