import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    console.log('Year data in Expenses.js: ' + filteredYear);

    const filterChangeHandler = (year) => {
        console.log('Filter change handled by Expenses.js');
        console.log(year + ' in Expenses.js');
        setFilteredYear(year);
    };

    const filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
        </Card>
    )
}

export default Expenses;
