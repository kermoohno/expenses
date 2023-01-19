import './App.css';

import Expenses from './components/Expenses/Expenses'
import NewExpense from "./components/NewExpense/NewExpense"

const App = () => {
    const DUMMY_EXPENSES = [
        {
            date: new Date(2023, 0, 10),
            title:'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 0, 5),
            title:'Icecream',
            price: 3.99
        },
        {
            date: new Date(2023, 0, 5),
            title:'New Jeans',
            price: 30.99
        }
    ]

    const addExpensehandler = (expense) => {
        console.log('In app js')
        console.log(expense)
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpensehandler}></NewExpense>
            <Expenses expenses={DUMMY_EXPENSES}></Expenses>
        </div>
    );
}

export default App;