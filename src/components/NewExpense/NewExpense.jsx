import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({ onAddExpense }) => {
	const [isFormShowing, setIsFormShowing] = useState(false)
	const saveExpenseHandler = (enteredExpense) => {
		const expenseData = {
			...enteredExpense,
			id: Math.random().toString(),
		}
		// console.log(expenseData)
		onAddExpense(expenseData)
		setIsFormShowing(false)
	}

	const showFormHandler = () => {
		if (isFormShowing === false) {
			setIsFormShowing(true)
		} else {
			setIsFormShowing(false)
		}
	}

	return (
		<div className="new-expense">
			{isFormShowing ? (
				<ExpenseForm
					onSaveExpense={saveExpenseHandler}
					onCancelForm={showFormHandler}
				/>
			) : (
				<button onClick={showFormHandler}>Add New Expense</button>
			)}
		</div>
	)
}

export default NewExpense
