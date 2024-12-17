const ExpenseItem = ({ expense, deleteExpense }) => {
    return (
      <li>
        <span>{expense.title}</span>  ${expense.amount} ({expense.category})
        <button onClick={() => deleteExpense(expense.id)}>Delete</button>
      </li>
    );
  };
  
  export default ExpenseItem;
  