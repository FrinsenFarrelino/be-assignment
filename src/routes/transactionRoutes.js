import {
  getAllTransaction,
  getTransactionByUserLogin,
  sendMoney,
  withdrawMoney,
} from "../controllers/transactionController.js";

const transactionRoutes = async (fastify, options) => {
  fastify.post("/send", sendMoney);
  fastify.post("/withdraw", withdrawMoney);
  fastify.get("/transaction-history", getTransactionByUserLogin);
  fastify.get("/all-transaction-history", getAllTransaction);
};

export default transactionRoutes;
