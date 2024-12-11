import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2024, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2025, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2024, 9, 17), price: 200 },
  ];
  const [addExpense, setAddExpense] = useState(expenses);
  const addExpenseHandler = (expense) => {
    setAddExpense((prevExpense) => {
      return [...prevExpense, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={addExpense} />
    </div>
  );
};

export default App;
