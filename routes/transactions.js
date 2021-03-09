const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
  getOneTransaction,
} = require("../controllers/transactions");

router.route("/").get(getTransactions).post(addTransaction);

router.route("/:id").delete(deleteTransaction);
router.route("/:id").get(getOneTransaction);

module.exports = router;
