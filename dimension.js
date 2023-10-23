const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      label: 'cyan',
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "cyan",
      fill: false
    }, { 
      label: 'pink',
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "pink",
      fill: false
    }, { 
      label: 'gold', 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "gold",
      fill: false
    },{ 
        label: 'white',
        data: [6300,1700,2000,0,600,8000,7000,7000,6000,5000],
        borderColor: "white",
        fill: false
      }]
  },
  options: {
    legend: {display: false},
    scales: {
        x: {
          ticks: {
            color: 'white' // Change the font color of X-axis labels
          }
        },
        y: {
          ticks: {
            color: 'white' // Change the font color of Y-axis labels
          }
        }
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