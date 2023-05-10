import React, { Fragment, useState, useRef } from 'react';
import './ExpenseForm.css';

import Error from '../UI/Error';

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [error, setError] = useState(null);

    const titleInputRef = useRef();
    const amountInputRef = useRef();
    const dateInputRef = useRef();

    const errorHandler = () => {
        setError(null);
    };
    console.log(error);

    /* const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
    }; */

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredAmount = amountInputRef.current.value;
        const enteredDate = dateInputRef.current.value;

        console.log(enteredTitle);
        console.log(enteredAmount);
        console.log(enteredDate);

        if (
            enteredTitle.trim().length === 0 ||
            enteredAmount.trim().length === 0 ||
            enteredDate.trim().length === 0
        ) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid title, amount or date (non-empty values)',
            });
            return;
        }

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        // setEnteredTitle('');
        // setEnteredAmount('');
        // setEnteredDate('');
        titleInputRef.current.value = '';
        amountInputRef.current.value = '';
        dateInputRef.current.value = '';
    };

    return (
        <Fragment>
            {error && (
                <Error
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input
                            type="text"
                            id="title"
                            ref={titleInputRef}
                            /* onChange={titleChangeHandler}
                              value={enteredTitle} */
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            id="amount"
                            ref={amountInputRef}
                            /* onChange={amountChangeHandler}
                              value={enteredAmount} */
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                            type="date"
                            min="2023-01-18"
                            max="2025-12-31"
                            id="date"
                            ref={dateInputRef}
                            /* onChange={dateChangeHandler}
                              value={enteredDate} */
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>
                        Cancel
                    </button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </Fragment>
    )
}

export default ExpenseForm