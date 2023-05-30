import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({ items }) => {
	if (items.length === 0) {
		return <h2 className="expenses-list__fallback">No expenses found.</h2>
	}

	return (
		<ul className="expenses-list">
			{items.map((x) => (
				<ExpenseItem
					key={x.id}
					date={x.date}
					title={x.title}
					price={x.amount}
				/>
			))}
		</ul>
	)
}

export default ExpensesList
