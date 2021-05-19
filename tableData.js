let url = 'https://api.caw.sh/v3/covid-19/states';

let section = document.getElementById("results");

fetch(url)
    .then(response => {
        console.log('Request successful', response);
        return response.json();
    })
    .then(data => {
        data.forEach(state => {
            let gridElement = document.createElement('div');
            gridElement.className = "grid-element";
            section.append(gridElement);
            let name = document.createElement('p');
            name.innerHTML = `${state.state}: ${state.cases}`;
            gridElement.append(name);
        });
        console.log('Data', data);
    })
    .catch(error => {
        console.log('Request failed', error)
    });