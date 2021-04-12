import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount > 0 ? "+$" : "-$";
  const { deleteTransaction, getOneTransactions } = useContext(GlobalContext);
  const handleClick = (id) => {
    getOneTransactions(id);
  };

  return (
    <li
      style={{ display: "flex" }}
      className={transaction.amount > 0 ? "plus" : "minus"}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginRight: "8px",
          alignItems: "center",
        }}
      >
        {transaction.text}
        <span>
          {sign}
          {numberWithCommas(Math.abs(transaction.amount))}
        </span>
      </div>

      <Button
        className="btn add"
        type="primary"
        icon={<EditOutlined onClick={() => handleClick(transaction._id)} />}
      />

      <Button
        style={{ marginLeft: "4px" }}
        type="primary"
        onClick={() => deleteTransaction(transaction._id)}
        className="btn add"
        icon={<CloseOutlined />}
      />
    </li>
  );
};
