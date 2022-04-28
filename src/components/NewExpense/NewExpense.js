import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEdditing(false);
  };

  const [isEdditing, setIsEdditing] = useState(false);

  const startEdditingHandler = () => {
    setIsEdditing(true);
  };
  const stopEdditingHandler = () => {
    setIsEdditing(false);
  };

  return (
    <div className="new-expense">
      {!isEdditing && (
        <button onClick={startEdditingHandler}>Add New Expense</button>
      )}
      {isEdditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEdditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
