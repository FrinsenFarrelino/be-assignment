import prisma from "../lib/prismaClient.js";
import supabase from "../lib/supabaseClient.js";
import getAuthUser from "../lib/getAuthUser.js";

const sendMoney = async (req, res) => {
  const { type, amount } = req.body;

  const user = await getAuthUser();

  try {
    // get the payment account data
    const payment_account = await prisma.PaymentAccount.findFirst({
      where: {
        email: user.email,
        type,
      },
    });

    // create a transaction history
    const transaction = await prisma.Transaction.create({
      data: {
        amount,
        status: "Success",
        type: "Send",
        to_address: user.email,
        payment_account_id: payment_account.id,
      },
    });

    // create a payment history
    const payment_history = await prisma.PaymentHistory.create({
      data: {
        transaction_id: transaction.id,
        status: "Success",
      },
    });

    res.status(201).send({
      message: "Successfully send money to account",
      payment_account,
      transaction,
      payment_history,
    });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).send({
      error: error.message,
    });
  }
};

const withdrawMoney = async (req, res) => {
  const { type, amount } = req.body;

  const user = await getAuthUser();

  try {
    // get the payment account data
    const payment_account = await prisma.PaymentAccount.findFirst({
      where: {
        email: user.email,
        type: type,
      },
    });

    // create a transaction history
    const transaction = await prisma.Transaction.create({
      data: {
        amount,
        status: "Success",
        type: "Withdraw",
        to_address: user.email,
        payment_account_id: payment_account.id,
      },
    });

    // create a payment history
    const payment_history = await prisma.PaymentHistory.create({
      data: {
        transaction_id: transaction.id,
        status: "Success",
      },
    });

    res.status(201).send({
      message: "Successfully withdraw from account",
      payment_account,
      transaction,
      payment_history,
    });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).send({
      error: error.message,
    });
  }
};

const getTransactionByUserLogin = async (req, res) => {
  const user = await getAuthUser();
  try {
    const transaction = await prisma.Transaction.findMany({
      select: {
        id: true,
        status: true,
        type: true,
        amount: true,
        to_address: true,
        payment_history: {
          select: {
            payment_date: true,
          },
        },
        payment_account: {
          select: {
            email: true,
            type: true,
          },
        },
      },
      where: {
        payment_account: {
          email: user.email,
        },
      },
    });
    res.status(200).send({
      message: "All transaction by " + user.email,
      transaction,
    });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).send({
      error: error.message,
    });
  }
};

const getAllTransaction = async (req, res) => {
  try {
    const transaction = await prisma.transaction.findMany({
      select: {
        id: true,
        status: true,
        type: true,
        amount: true,
        to_address: true,
        payment_history: {
          select: {
            payment_date: true,
          },
        },
        payment_account: {
          select: {
            email: true,
            type: true,
          },
        },
      },
    });

    res.status(200).send({
      message: "All transaction",
      transaction,
    });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).send({
      error: error.message,
    });
  }
};

export { sendMoney, withdrawMoney, getTransactionByUserLogin, getAllTransaction };
