import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: ['Uncompleted', 'Completed'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 88],
			backgroundColor: ['#f7258555', '#06d6a0'],
			borderWidth: 1,
		},
	],
};

const DoughnutChart = () => <Doughnut data={data} />;

export default DoughnutChart;
