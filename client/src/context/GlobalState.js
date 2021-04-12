import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//InitialState
const initialState = {
  transactions: [],
  oneTransaction: [],
  erro: null,
  loading: true,
  visible: false,
};

// Create Context

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action
  function hideModal() {
    try {
      dispatch({
        type: "VISIBLE",
        payload: false,
      });
    } catch (error) {
      return;
    }
  }

  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");
      dispatch({
        type: "GET_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function getOneTransactions(id) {
    try {
      const res = await axios.get(`/api/v1/transactions/${id}`);
      console.log("toi day chua", res);
      dispatch({
        type: "GET_ONE_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/transactions", transaction, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        oneTransaction: state.oneTransaction,
        deleteTransaction,
        addTransaction,
        getTransactions,
        getOneTransactions,
        hideModal,
        loading: state.loading,
        error: state.error,
        visible: state.visible,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
