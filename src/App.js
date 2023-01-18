import './App.css';
import './components/ExpenseItem'
import Expenses from './components/Expenses'

import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title:'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 0, 5),
            title:'Icecream',
            price: 3.99
        }
    ]

    return (
        <div className="App">
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}

export default App;