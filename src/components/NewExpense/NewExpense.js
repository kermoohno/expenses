import React, {useState} from 'react'

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [formEdit, setFormEdit] = useState(false);

    const formEditHandler = () => {
        setFormEdit(!formEdit)
    }

    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        formEditHandler()
    }

    const cancelHandler = () => {
        formEditHandler()
    }

    if (formEdit) {
        return(
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} onCancel={cancelHandler} />
            </div>
        )
    } else {
        return (
            <div className='new-expense'>
                <button onClick={formEditHandler}>Add New Expense</button>
            </div>
        )
    }
}

export default NewExpense