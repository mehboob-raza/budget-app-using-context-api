/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Transaction = ({ transaction }) => {
  const { deleteTransactions } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <div>
      <li
        className={transaction.amount < 0 ? "minus" : "plus"}
        key={transaction.id}
      >
        {transaction.text}{" "}
        <span>
          {" "}
          {sign}${Math.abs(transaction.amount)}{" "}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransactions(transaction.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
