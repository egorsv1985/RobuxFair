const ctx = document.getElementById('graph_activation');
const myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['Jun', 'Dec', 'Nov', 'Oct', 'Sep', 'Aug'],
		datasets: [
			/* Параметры первой таблицы для IOS*/
			{
				label: '',
				data: [11, 11, 11, 11, 11, 11],
				backgroundColor: [
					'#0073FF',
				],
				borderColor: [
					'#0073FF',
				],
				borderWidth: 1
			},
			/* Параметры первой таблицы для Android*/
			{
				label: '',
				data: [7, 7, 7, 7, 7, 7],
				backgroundColor: [
					'#009E8B',
				],
				borderColor: [
					'#009E8B',
				],
				borderWidth: 1,

			},

		],

	},
});


let ctx2 = document.getElementById('graph_retention');
let chart = new Chart(ctx2, {
	type: 'line',
	data: {
		labels: ['1m', '2m', '4m', '6m', '8m', '10m', '12m'],
		datasets: [{ // График зелёного цвета
				label: 'График 1',
				backgroundColor: 'transparent',
				borderColor: 'green',
				data: [70, 60, 60, 50, 40, 30, 20],
			},
			{ // График синего цвета
				label: 'График 2',
				// backgroundColor: 'transparent',
				borderColor: 'blue',
				data: [90, 80, 80, 70, 60, 50, 40]
			}
		],
	},
});