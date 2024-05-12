import {
  createAccount,
  getAccount,
  getAllAccount,
  getAllAccountByUserLogin,
} from "../controllers/accountController.js";

const accountRoutes = async (fastify, options) => {
  fastify.get("/all", getAllAccount);
  fastify.get("/", getAllAccountByUserLogin);
  fastify.get("/:id", getAccount);
  fastify.post("/", createAccount);
};

export default accountRoutes;
