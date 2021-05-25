import { JSCharting } from 'jscharting-react';

let url = 'https://api.caw.sh/v3/covid-19/states';
const states = 'AL,AK,AZ,AR,CA,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY';
let points = states.split(',').map((item) => { 
    return { map: 'US.' + item };
});

let getMap = (url) => {
    fetch(url)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        let mapDiv = document.getElementById('mapDiv')/*.getContext('2d')*/;
        let map = document.createElement('JSCharting');

        let config = { //https://jscharting.com/tutorials/types/js-map-chart/
            debug: true,
            type: 'map',
            series: [{ id: 'usMap', map: 'us', points: points }],
            palette: {
                pointValue: '{%zValue}',
                colors: ['#ffffff', '#F5D0CC', '#ECA299', '#E27367', '#D94534', '#AF4034', '#BF2B1A', '#7C0D01', '#A61201'],
                ranges: { min: 0, max: 10000000 , interval: 1000000 },
            },
            defaultPoint: {
                label_text: '%stateCode'
            }
        };

        mapDiv.appendChild(map);
        map.options = config;


    }).catch(error => {
        console.log('Request failed', error)
    });
}
getMap(url);


