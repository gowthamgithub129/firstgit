import React, { useState } from 'react';

// ExpenseItem component
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {props.name} Rs {props.amount}
    </div>
  );
}

// App component
function App() {
  const [expenses, ] = useState([
    { id: 1, name: 'Food', amount: 10 },
    { id: 2, name: 'Petrol', amount: 100 },
    { id: 3, name: 'Movies', amount: 200 },
  ]);

  return (
    <div className="App">
      <h2>Expense Items</h2>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} name={expense.name} amount={expense.amount} />
      ))}    </div>
  );
}

export default App;
