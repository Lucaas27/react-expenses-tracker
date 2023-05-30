import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpense, onCancelForm }) => {
	const [formInputs, setformInputs] = useState({
		inputTitle: '',
		inputAmount: '',
		inputDate: '',
	})

	const titleChangeHandler = (e) => {
		// console.log(e.target.value)
		setformInputs((prevState) => {
			return { ...prevState, inputTitle: e.target.value }
		})
	}

	const amountChangeHandler = (e) => {
		setformInputs((prevState) => {
			return { ...prevState, inputAmount: e.target.value }
		})
	}

	const dateChangeHandler = (e) => {
		setformInputs((prevState) => {
			return { ...prevState, inputDate: e.target.value }
		})
	}

	// console.log(formInputs)
	const submitHandler = (e) => {
		e.preventDefault()
		const expenseData = {
			title: formInputs.inputTitle,
			amount: +formInputs.inputAmount,
			date: new Date(formInputs.inputDate),
		}

		onSaveExpense(expenseData) //function passed down from the NewExpense parent component.
		setformInputs({
			inputTitle: '',
			inputAmount: '',
			inputDate: '',
		})
	}

	return (
		<>
			<form onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input
							type="text"
							value={formInputs.inputTitle}
							onChange={titleChangeHandler}
						/>
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input
							type="number"
							min="0.01"
							step="0.01"
							value={formInputs.inputAmount}
							onChange={amountChangeHandler}
						/>
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input
							type="date"
							min="2019-01-01"
							max="2026-12-31"
							value={formInputs.inputDate}
							onChange={dateChangeHandler}
						/>
					</div>
				</div>
				<div className="new-expense__actions">
					<button type="button" onClick={onCancelForm}>
						Cancel
					</button>
					<button type="submit">Add Expense</button>
				</div>
			</form>
		</>
	)
}

export default ExpenseForm
