import "./App.css";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { EditTransaction } from "./components/EditTransaction";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";

function App() {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <GlobalProvider>
      <div className="container">
        <Header
          title="Expense Tracker"
          onAdd={() => setShowAdd(!showAdd)}
          showAdd={showAdd}
        />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        {showAdd && <AddTransaction />}
      </div>
    </GlobalProvider>
  );
}

export default App;
