import prisma from "../lib/prismaClient.js";
import getAuthUser from "../lib/getAuthUser.js";

const getAllAccount = async (req, res) => {
  try {
    const payment_account = await prisma.PaymentAccount.findMany();
    res.status(200).send({
      message: "All Payment Account",
      payment_account,
    });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).send({
      error: error.message,
    });
  }
};

const getAllAccountByUserLogin = async (req, res) => {
  const user = await getAuthUser();
  try {
    const payment_account = await prisma.PaymentAccount.findMany({
      where: {
        email: user.email,
      },
    });
    res.status(200).send({
      message: "All Payment Account owned by " + user.email,
      payment_account,
    });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).send({
      error: error.message,
    });
  }
};

const getAccount = async (req, res) => {
  const params = req.params;
  const payment_account = await prisma.PaymentAccount.findMany({
    where: {
      id: parseInt(params.id),
    },
  });
  res.status(200).send({
    message: "Payment account by id : " + params.id,
    payment_account,
  });
};

const createAccount = async (req, res) => {
  const { type } = req.body;

  const user = await getAuthUser();

  try {
    // Check if a record with the same email and type combination already exists
    const existingAccount = await prisma.PaymentAccount.findFirst({
      where: {
        email: user.email,
        type,
      },
    });

    if (existingAccount) {
      // Handle duplicate record (e.g., throw an error, update existing record, etc.)
      return res.status(400).send({
        message:
          "A PaymentAccount with the email : " +
          user.email +
          "  and type : " +
          type +
          " already exists.",
      });
    }

    // Create or update the PaymentAccount record
    const newAccount = await prisma.PaymentAccount.create({
      data: {
        email: user.email,
        type,
      },
    });

    res.status(200).send({
      message: "Payment account created successfully",
      newAccount,
    });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).send({
      error: error.message,
    });
  }
};

export {
  getAllAccount,
  getAllAccountByUserLogin,
  getAccount,
  createAccount
};
