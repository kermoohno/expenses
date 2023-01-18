import React from 'react';

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = () => {
    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
    }


    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDatahandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense