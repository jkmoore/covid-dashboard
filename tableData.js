let url = 'https://api.caw.sh/v3/covid-19/states';

let section = document.getElementById("results");

fetch(url)
    .then(response => {
        console.log('Request successful', response);
        return response.json();
    })
    .then(data => {
        let heading = document.createElement('tr');
        section.append(heading);
        let stateHeading = document.createElement('td');
        stateHeading.innerHTML = 'State';
        heading.append(stateHeading);
        let populationHeading = document.createElement('td');
        populationHeading.innerHTML = 'Population';
        heading.append(populationHeading);
        let caseHeading = document.createElement('td');
        caseHeading.innerHTML = 'Cases';
        heading.append(caseHeading);
        let deathHeading = document.createElement('td');
        deathHeading.innerHTML = 'Deaths';
        heading.append(deathHeading);
        data.forEach(state => {
            if (state.state !== 'Wuhan Repatriated' && state.state !== 'Veteran Affairs' && state.state !== 'US Military' &&
                state.state !== 'Grand Princess Ship' && state.state !== 'Diamond Princess Ship' && state.state !== 'Puerto Rico' && 
                state.state !== 'American Samoa' && state.state !== 'Guam' && state.state !== 'United States Virgin Islands' && 
                state.state !== 'Federal Prisons' && state.state !== 'Navajo Nation' && state.state !== 'Northern Mariana Islands') {
                let row = document.createElement('tr');
                section.append(row);
                let stateName = document.createElement('td');
                stateName.innerHTML = `${state.state}`;
                row.append(stateName);
                let population = document.createElement('td');
                population.innerHTML = `${state.population}`;
                row.append(population);
                let cases = document.createElement('td');
                cases.innerHTML = `${state.cases}`;
                row.append(cases);
                let deaths = document.createElement('td');
                deaths.innerHTML = `${state.deaths}`;
                row.append(deaths);
            }
        });
        console.log('Data', data);
    })
    .catch(error => {
        console.log('Request failed', error)
    });