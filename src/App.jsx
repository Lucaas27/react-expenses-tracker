import { useState } from 'react'
// import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import React from 'react'

const expenses = [
	// {
	// 	id: '',
	// 	title: '',
	// 	amount: '',
	// 	date: '',
	// },
	{
		id: 'e1',
		title: 'Soap',
		amount: 3.99,
		date: new Date(2023, 5, 15),
	},
	{
		id: 'e2',
		title: 'Train ticket',
		amount: 54.3,
		date: new Date(2023, 1, 23),
	},
	{
		id: 'e3',
		title: 'Groceries',
		amount: 20.5,
		date: new Date(2023, 3, 20),
	},
	{
		id: 'e4',
		title: 'Laptop',
		amount: 400.99,
		date: new Date(2022, 4, 2),
	},
]

const App = () => {
	const [expensesList, setExpenseList] = useState(expenses)
	const addExpenseHandler = (expenseData) => {
		setExpenseList((prevExpensesList) => {
			return [expenseData, ...prevExpensesList]
		})
	}

	return (
		<>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expensesList} />
		</>
	)
}

export default App
