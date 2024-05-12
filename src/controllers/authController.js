import prisma from "../lib/prismaClient.js";
import supabase from "../lib/supabaseClient.js";

// Register a new user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Create the user in the database and supabase
    const { data, error } = await supabase.auth.signUp({
      name,
      email,
      password,
    });

    if (error) {
      return res
        .status(400)
        .send({ message: "Sign up in failed", error: error.message });
    }

    res.status(201).send({
      message: "User registered successfully",
      userAuth: data,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({
      error: error.message,
    });
  }
};

// Login user and generate JWT token
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // Handle sign-in error
      return res
        .status(400)
        .send({ message: "Sign in failed", error: error.message });
    }

    const session = await supabase.auth.getSession();

    res.status(200).send({
      message: "Sign in success",
      data: data,
      session: session,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).send({
      error: error.message,
    });
  }
};

const signOutUser = async (req, res) => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      // Handle sign-out error
      return res
        .status(400)
        .send({ message: "Sign out failed", error: error.message });
    }

    res.status(200).send({
      message: "Sign out success",
    });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).send({
      error: error.message,
    });
  }
};

export { registerUser, loginUser, signOutUser };
