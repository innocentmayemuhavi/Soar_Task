import axios from "axios";
import { CardType, User } from "../models";

const getUser = () => {
  const res = axios
    .get("../../backend/user.json")
    .then((res) => {
      return res.data.data as User;
    })
    .catch((error) => {
      console.error(error);
      return;
    });

  return res;
};

const getCards = () => {
  const res = axios
    .get("../../backend/cards.json")
    .then((res) => {
      return res.data.data.cards as CardType[];
    })
    .catch((error) => {
      console.error(error);
      return;
    });
  return res;
};

const getExpencesStats = () => {
  const res = axios
    .get("../../backend/expense-stats.json")
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      console.error(error);
      return;
    });
  return res;
};
const getBalanceHistory = () => {
  const res = axios
    .get("../../backend/balance-history.json")
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      console.error(error);
      return;
    });
  return res;
};
const getRecentTransactions = () => {
  const res = axios
    .get("../../backend/recent-transactions.json")
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      console.error(error);
      return;
    });
  return res;
};

const getWeeklyActivity = () => {
  const res = axios
    .get("../../backend/weekly-activity.json")
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      console.error(error);
      return;
    });
  return res;
};

export {
  getUser,
  getCards,
  getExpencesStats,
  getBalanceHistory,
  getRecentTransactions,
  getWeeklyActivity,
};
