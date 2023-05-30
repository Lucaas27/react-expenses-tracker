import React from 'react'
import Chart from '../Chart/Chart'

const ExpensesChart = ({ expenses }) => {
	const chartData = [
		{
			label: 'Jan',
			value: 0,
		},
		{
			label: 'Feb',
			value: 0,
		},

		{
			label: 'Mar',
			value: 0,
		},

		{
			label: 'Apr',
			value: 0,
		},

		{
			label: 'May',
			value: 0,
		},
		{
			label: 'Jun',
			value: 0,
		},
		{
			label: 'Jul',
			value: 0,
		},
		{
			label: 'Aug',
			value: 0,
		},
		{
			label: 'Nov',
			value: 0,
		},
		{
			label: 'Dev',
			value: 0,
		},
	]

	for (const expense of expenses) {
		const expenseMonth = expense.date.getMonth() //starting at 0 (Jan)
		chartData[expenseMonth].value += expense.amount
	}

	return <Chart dataPoints={chartData} />
}

export default ExpensesChart
