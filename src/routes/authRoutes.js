import {
  registerUser,
  loginUser,
  signOutUser,
} from "../controllers/authController.js";

const authRoutes = async (fastify, options) => {
  fastify.post("/register", registerUser);
  fastify.post("/login", loginUser);
  fastify.post("/sign-out", signOutUser);
};

export default authRoutes;
