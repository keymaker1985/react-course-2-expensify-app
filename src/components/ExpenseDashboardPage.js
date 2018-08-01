import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = ()=>(
    <div>
        <h1>Expense List</h1>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;