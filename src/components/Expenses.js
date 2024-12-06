// Write your code here
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            price={expense.price}
            location={expense.location}
            title={expense.title}
          />
        );
      })}
    </Card>
  );
}
export default Expenses;
