import "../../App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { JSCharting } from 'jscharting-react';

const covidUrl = 'https://api.caw.sh/v3/covid-19/states';
const states = 'AL,AK,AZ,AR,CA,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY';
const statesFull = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

export const CovidMap = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(covidUrl).then((resp) => {
            let info = resp.data;
            let finalStates = [];
            info.forEach(element => {
                if(statesFull.includes(element.state)){
                    finalStates.push(element);
                }
            });
            console.log('Data: ', info);
            console.log('Final: ',finalStates);
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
            finalStates.sort(compare);
            console.log('Sorted: ',finalStates);
            setData(finalStates);
        });
    }, []);

//write a function to grab data for each state and store it as a point in config
    let points = states.split(',').map((item) => { 
        return { map: 'US.' + item };
    });

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

    return(
        <main className="container">
            <h2 className="header">Map: US map. Should be able to display data when hovering over the state.</h2>
            <p className="text">Can also click on a state and view data per county within the state</p>
            <div className='chart'>
                <JSCharting options={config}/>
            </div>
        </main>
    );
}