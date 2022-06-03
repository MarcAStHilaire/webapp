"use strict";

var etats = document.getElementById("etats");
let symbols = document.getElementById("monnaies");
let debutDate = new Date();
let finDate = new Date();
let tauxEchangeChoisis = 1;
let tableauDePrixEtDate = [];
const apiKey_eiaGouv = "1fhXasaoqSfNUTygCWuAq3feT6BVQMo43nLV2kAn";

document.getElementById('start').addEventListener('change', ajusterDateEtPrix);
document.getElementById('end').addEventListener('change', ajusterDateEtPrix);
etats.addEventListener('change', ajusterDateEtPrix);
symbols.addEventListener('change', ajusterDateEtPrix);


ObtenirListeMonnaie();


function ObtenirListeMonnaie() {

  var myHeaders = new Headers();
  myHeaders.append("apikey", "ozpH6AhUzpvztRNG2YNSehYW7wTUE7hD");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  //on recueille les divises
  fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
    .then(response => response.json())
    .then(data => {
      let selectMonnaies = document.getElementById('monnaies');
      let opt = document.createElement('option');
      const obj = data.symbols;
      const devise = Object.entries(obj);
      selectMonnaies.remove(0)
      devise.forEach(symbol => {
        opt = document.createElement('option');
        opt.value = symbol[0];
        opt.innerHTML = symbol[1];
        selectMonnaies.appendChild(opt);
      })
    })
};



function ajusterDateEtPrix() {
  debutDate = new Date(document.getElementById('start').value);
  finDate = new Date(document.getElementById('end').value);


  //Création du nouveau chart si les dates sont correct
  if (debutDate instanceof Date && !isNaN(debutDate.valueOf()) && finDate instanceof Date && !isNaN(finDate.valueOf())) {
    if (debutDate < finDate) {
      let debutDateString = debutDate.getFullYear().toString() + debutDate.getMonth().toString().replace(/(^|\D)(\d)(?!\d)/g, '$10$2');
      let finDateString = finDate.getFullYear().toString() + finDate.getMonth().toString().replace(/(^|\D)(\d)(?!\d)/g, '$10$2');
      obtenirPrixPetrole(debutDateString,finDateString);
      obtenirPrixConversion();
      
    };
  }
};

function obtenirPrixPetrole(debutDateString, finDateString) {

  let etatRechercheCode = etats.options[etats.selectedIndex].value;
  tableauDePrixEtDate = [];

  fetch("https://api.eia.gov/series/?api_key=" + apiKey_eiaGouv + "&series_id=" + etatRechercheCode + "&start=" + debutDateString + "&end=" + finDateString)
    .then(response => {
      return response.json()
    })
    .then(obj => {
      obj.series[0].data.forEach(dateEtPrix => {
        tableauDePrixEtDate.push({
          x: dateEtPrix[0].slice(0, 4) + "-" + dateEtPrix[0].slice(4),
          y: dateEtPrix[1] * tauxEchangeChoisis
        })
      })
      tableauDePrixEtDate = tableauDePrixEtDate.reverse();
      mettreAJourChart();
    })


};
function mettreAJourChart() {
  myChart.destroy();
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Évolution du prix de l\'essence',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: tableauDePrixEtDate,
      }],
    },
    options: {
      scales: {
        y: {
          title: {
            display: true,
            text: 'Prix Par Gallon'
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
};

function obtenirPrixConversion() {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "ozpH6AhUzpvztRNG2YNSehYW7wTUE7hD");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  symbols = document.getElementById("monnaies");
  let symbolSelectionne = symbols.options[symbols.selectedIndex].value;

  if (symbolSelectionne != "" && debutDate instanceof Date && !isNaN(debutDate.valueOf()) && finDate instanceof Date && !isNaN(finDate.valueOf())) {
    if (debutDate < finDate) {

      fetch("https://api.apilayer.com/exchangerates_data/convert?to=" + symbolSelectionne + "&from=USD" + "&amount=1", requestOptions)
        .then(response => response.json())
        .then(result => {
          tauxEchangeChoisis = result.info.rate;
          mettreAJourChart();
        })
        .catch(error => console.log('error', error));
    }
  }
};