let mainDashboardUrl = 'https://disease.sh/v3/covid-19/countries/usa';

let mainDashboard = document.getElementById("mainDashboard");

fetch(mainDashboardUrl)
    .then(response => {
        console.log('Request successful', response);
        return response.json();
    })
    .then(data => {
        let populationText = document.createElement('h2');
        populationText.innerHTML = `${data.population / 1000000} million population`;
        mainDashboard.append(populationText);
        let caseText = document.createElement('h2');
        caseText.innerHTML = `${data.cases / 1000000} million confirmed cases`;
        mainDashboard.append(caseText);
        let deathText = document.createElement('h2');
        deathText.innerHTML = `${data.deaths / 1000} thousand confirmed deaths`;
        mainDashboard.append(deathText);
        console.log('Data', data);
    })
    .catch(error => {
        console.log('Request failed', error)
    });