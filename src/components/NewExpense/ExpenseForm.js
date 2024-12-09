import React, { useState } from "react";
import "./ExpenseForm.css";

/*const initialData={
  enteredTitle:'',
    enteredAmount:'',
    enteredDate:'',
} // you can also create an object and can use inside inside a single state rather than mantaining multiple states. 
    
*/

const ExpenseForm = () => {
  /*const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //Multiple State Management
  */

  const [userInput, setUserInput] = useState({
    //Here you can also use InitialDate(object) if the element inside of object is much more.
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    //setEnteredTitle(event.target.value); // This method is used for single state Management
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
        //prevState provide you current values of object which was not possible only by setUserInput().
      };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2023-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
