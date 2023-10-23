const ctx = document.getElementById('barchart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','black'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3,8],
      backgroundColor:[
        'rgba(255,99,132,0.2)',
        'rgba(54,162,235,0.3)',
        'rgba(255,206,86,0.2)',
        'rgba(75,192,192,0.2)',
        'rgba(153,102,255,0.2)',
        'rgba(255,159,64,0.2)',
        'rgb(,0,0,0,.5)'
      ],
      borderColor:[
        'rgba(255,99,132)',
        'rgba(54,162,235)',
        'rgba(255,206,86)',
        'rgba(75,192,192)',
        'rgba(153,102,255)',
        'rgba(255,159,64)',
        'rgba(0,0,0)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
            color: 'white' // Change the font color of Y-axis labels
          }
      },
      x: {
        // beginAtZero: true,
        ticks: {
            color: 'white' 
          }
      },
    },
    plugins: {
        legend: {
          labels: {
            color: 'white' // Change the color of the legend labels
          }
        }
      }
  }
});