import React from 'react';
import ExpenseItems from './ExpenseItems'; // Make sure to provide the correct path to the ExpenseItems component

function App() {
  const expenses = [
    { id: 1, location: 'Grocery Store' },
    { id: 2, location: 'Restaurant' },
    { id: 3, location: 'Online Shopping' },
    // ... add more expenses as needed
  ];

  return (
    <div className="app">
      {expenses.map(expense => (
        <ExpenseItems key={expense.id} LocationOfExpenditure={expense.location} />
      ))}
    </div>
  );
}

export default App;
