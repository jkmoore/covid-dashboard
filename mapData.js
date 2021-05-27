let mapURL = 'https://api.caw.sh/v3/covid-19/states';

var mapStates = 'AL,AK,AZ,AR,CA,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY'.split(
  ','
);
const statesFull = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

function getData() {
  fetch(mapURL)
    .then((response) => {
        console.log("MAPDATA 2")
        return response.json();
    })
    .then((data) => {
        let states = [];
        console.log('Data: ', data);
        data.forEach(element => {
            if(statesFull.includes(element.state)){
              states.push(element);
            }
        });
        console.log('Final: ', states);
        function compare (a, b){
            const stateA = a.state;
            const stateB = b.state;

            if(stateA > stateB){
                return 1;
            }
            else{
                return -1;
            }
        }
        states.sort(compare);

        console.log("States: ", states)
        console.log("length: ", states.length)


        function getRandomPoints() {
            var serPoints = mapStates.map((arrItem, index) => {
                console.log("Index: ", index);
                console.log("State at Index: ", states[index]);
                return { map: 'US.' + arrItem, z: states[index].cases, y: states[index].deaths };
            });
            return serPoints;
        }
          
        var chartConfig = {
        debug: false,
        type: 'map',
        palette: {
            pointValue: '{%zValue}',
            colors: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
            ranges: [0, 100000, 200000, 400000, 800000, [1200000, 4000000]],
            defaultRange_legendEntry_value: '%min - %max'
        },
        legend: {
            title_label_text: 'Cases',
            template: '%value %icon',
            position: 'top'
        },
        defaultPoint: {
            label_text: '%stateCode',
            tooltip: "<b>%name<b/> <br/> Total Cases: {%zValue}"
        },
        defaultSeries_shape_padding: 0.02,
        series: [{ id: 'usMap', map: 'us' }]
        };
        
        chartConfig.series[0].points = getRandomPoints();
        console.log("Points: ", chartConfig.series[0].points);
        JSC.chart('chartDiv', chartConfig);
    }).catch(error => {
        console.log('Faild', error);
    });
}
getData();