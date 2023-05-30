import React, { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'

const Expenses = ({ expenses }) => {
	const currentYear = new Date().getFullYear().toString()
	const [yearPicked, setYearPicked] = useState(currentYear)

	const saveYearPicked = (year) => {
		setYearPicked(year)
	}
	// console.log(yearPicked, 'from Expenses.jsx')

	const filteredExpenses = expenses.filter((x) => {
		return x.date.getFullYear().toString() === yearPicked
	})

	// console.log(filteredExpenses)
	return (
		<>
			<Card className="expenses">
				<ExpensesFilter selectedYear={yearPicked} onPickYear={saveYearPicked} />
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</>
	)
}

export default Expenses
