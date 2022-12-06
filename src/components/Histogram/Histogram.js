import React from "react";
import { Bar } from 'react-chartjs-2';
import { useState } from "react";
import { Chart, registerables } from 'chart.js';
import './Histogram.css';

const Histogram = ({cData}) => {
  
	Chart.register(...registerables);
	const data = {
		labels: cData.map((point)=> point[0]),
		datasets: [
			{
				label: "Occurences",
				backgroundColor: "#008CBA",
				borderColor: "#008CBA",
				data: cData.map((point) => point[1] ),
			},
		],
		options: {
			maintainAspectRatio: false,
			responsive: true,
			plugins: {
			title: {
				display: true,
				text: 'TOP 20 MOST FREQUENT OCCURING WORDS'
			},        
			tooltip: {
					mode: 'index',
					intersect: false
			},        
			scales: {
			// x: {
			// 		stacked: true,
			// 		gridLines: {
			// 		drawBorder: false,
			// 		display: false,
			// 		},
			// 		ticks: {
			// 		autoSkip: true,
			// 		maxTicksLimit: 13,
			// 		},
			// },
			// y: {
			// 		stacked: true,
			// 		gridLines: {
			// 		color: '#e6e6e6',
			// 		drawBorder: false,
			// 		},
			// }
			yAxis:[{
				ticks:{
					beginAtZero:true,
				}
			}]
		}
	}
}
	};

	
	return (
		<div className="chart-container">
       <h2 style={{textAlign:"center"}}>
				 TOP 20 WORDS BASED ON FREQUENCY
			 </h2>
			 <Bar data = {data} />
		</div>
	)
};

export default Histogram