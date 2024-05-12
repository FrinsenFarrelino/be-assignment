import dotenv from "dotenv";
dotenv.config();

// Import the fastify framework
import Fastify from "fastify";
import EventEmitter from "events";

// swagger
import fastifySwagger from "@fastify/swagger";
// Import my routes
import authRoutes from "../src/routes/authRoutes.js";
import transactionRoutes from "../src/routes/transactionRoutes.js";
import accountRoutes from "../src/routes/accountRoutes.js";
// import routes from "./routes/userRoutes.js";

const eventEmitter = new EventEmitter();
eventEmitter.setMaxListeners(20); // Set the limit as needed

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifySwagger, {
  routePrefix: "/documentation",
  swagger: {
    info: {
      title: "Your API Documentation",
      description: "API documentation for your application",
      version: "1.0.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    consumes: ["application/json"],
    produces: ["application/json"],
  },
  exposeRoute: true,
});

// start my server
fastify.register(authRoutes, { prefix: "/api" });
fastify.register(transactionRoutes, { prefix: "/api" });
fastify.register(accountRoutes, { prefix: "/api/account" });

try {
  fastify.listen({ port: process.env.APP_PORT, host: '0.0.0.0' });
} catch (error) {
  fastify.log.error(error);
  proccess.exit(1);
}
