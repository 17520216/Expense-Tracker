import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Modal, Button } from "antd";
import { Transaction } from "./Transaction";
import { AddTransaction } from "./AddTransaction";

export const EditTransaction = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { oneTransaction, visible, hideModal } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleCancel = () => {
    hideModal();
  };

  return (
    <div>
      <Modal
        footer={<Button onClick={handleCancel}>Cancel</Button>}
        title="Basic Modal"
        visible={visible}
        onCancel={handleCancel}
      >
        <form>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              value={oneTransaction.text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Enter text..."
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input
              value={oneTransaction.amount}
              type="number"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="Enter amount..."
            />
          </div>
          <button className="btn">Change Submit</button>
        </form>
      </Modal>
    </div>
  );
};
