import React from 'react';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const expenses = [
    {
      id: 1,
      title: 'Groceries',
      amount: 50.00,
      location: 'Grocery Store',
      date: new Date(2023, 7, 15), // August 15, 2023
    },
    {
      id: 2,
      title: 'Dinner',
      amount: 30.00,
      location: 'Restaurant',
      date: new Date(2023, 7, 16), // August 16, 2023
    },
    // ... add more expenses as needed
  ];

  return (
    <div className="app">
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default App;
