import fastify, { FastifyInstance } from "fastify";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

import itemRoutes from "./backend/routes/items";

const app: FastifyInstance = fastify({ logger: true });

app.register(swagger);
app.register(swaggerUI, { routePrefix: "/docs" });

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
