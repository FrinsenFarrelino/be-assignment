// to check the credential

import supabase from "./supabaseClient.js";

const getAuthUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user == null) {
    return res.status(400).send({ message: "Sign in first" });
  }

  return user;
};

export default getAuthUser;
