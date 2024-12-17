
import { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };
  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <div className="total-amount">
        <h3>Total Expenses: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
}
