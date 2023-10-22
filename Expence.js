$(document).ready(function() {
    // Check if there are any expenses in local storage and load them
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    renderExpenses();
  
    // Handle form submission
    $('#expenseForm').submit(function(event) {
      event.preventDefault();
      const expenseName = $('#expenseName').val();
      const expenseAmount = parseFloat($('#expenseAmount').val());
  
      if (expenseName && expenseAmount) {
        const expense = {
          name: expenseName,
          amount: expenseAmount
        };
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));
  
        // Clear the form inputs
        $('#expenseName').val('');
        $('#expenseAmount').val('');
  
        renderExpenses();
      }
    });
  
    // Render expenses in the table
    function renderExpenses() {
      const expenseTable = $('#expenseTable');
      const totalExpense = $('#totalExpense');
      expenseTable.find('tbody').empty();
  
      let total = 0;
      expenses.forEach(function(expense, index) {
        const row = `<tr>
                      <td>${expense.name}</td>
                      <td>$${expense.amount.toFixed(2)}</td>
                      <td>
                        <button class="btn btn-sm btn-danger delete-btn" data-index="${index}">Delete</button>
                      </td>
                    </tr>`;
        expenseTable.find('tbody').append(row);
        total += expense.amount;
      });
  
      totalExpense.text(`Total: $${total.toFixed(2)}`);
  
      // Attach event listener to delete buttons
      $('.delete-btn').click(function() {
        const index = $(this).data('index');
        expenses.splice(index, 1);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        renderExpenses();
      });
    }
  });