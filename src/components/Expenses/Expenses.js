import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expenseContent = <p>No Expenses Found</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
          {filteredExpenses.length === 1 && (
            <p>Only one expense here. Please add more</p>
          )}
        </>
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={changeFilterHandler}
      />
      {expenseContent}
    </Card>
  );
}

export default Expenses;
