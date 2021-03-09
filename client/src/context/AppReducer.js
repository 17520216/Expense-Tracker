export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };

    case "GET_ONE_TRANSACTION":
      console.log("toi day roi nha", action.payload);
      return {
        ...state,
        transaction: action.payload,
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case "GET_TRANSACTION":
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case "TRANSACTION_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
