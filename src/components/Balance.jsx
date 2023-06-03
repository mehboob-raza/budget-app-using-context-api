import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts, "amounts");
  const total = amounts.reduce((acc, amount) => acc + amount, 0);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total} </h1>
    </div>
  );
};

export default Balance;
