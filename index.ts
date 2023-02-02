import fastify, { FastifyInstance } from "fastify";

import itemRoutes from "./routes/items";

const app: FastifyInstance = fastify({ logger: true });

app.register(itemRoutes);

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server listening at ${address}`);
});
