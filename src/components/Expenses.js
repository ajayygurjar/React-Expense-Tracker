import ExpenseItem from "./ExpenseItem";
import "./Expenses";
function Expenses(props) {
  return (
    <div>
      {" "}
      {props.expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            price={expense.price}
            location={expense.location}
            title={expense.title}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}
export default Expenses;
