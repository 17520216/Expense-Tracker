import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";

export const Transaction = ({ transaction }) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const sign = transaction.amount > 0 ? "+$" : "-$";
  const { deleteTransaction, getOneTransactions } = useContext(GlobalContext);

  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
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
        onClick={() => getOneTransactions(transaction._id)}
        icon={<EditOutlined onClick={() => setVisible(true)} />}
      />
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={<Button onClick={() => setVisible(false)}>Cancel</Button>}
      >
        <form>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} placeholder={transaction.text} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input
              value={amount}
              type="number"
              placeholder={transaction.amount}
            />
          </div>
          <button className="btn">Change Transaction</button>
        </form>
      </Modal>

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
