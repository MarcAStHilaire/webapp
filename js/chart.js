
const ctx = document.getElementById('myChart');

let myChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      label: 'Évolution du prix de l\'essence',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: []
    }],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Prix Par Gallon ($)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Mois'
        }
      }
    }
  }
});