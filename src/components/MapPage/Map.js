import "../../App.css";
import React/*, { useState }, { useEffect, useState }*/ from "react";
//import axios from "axios";
import { JSCharting } from 'jscharting-react';

//const covidUrl = 'https://api.caw.sh/v3/covid-19/states';
/*const states = 'AL,AK,AZ,AR,CA,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY'.split(
    ','
);*/

let config = {
    debug: false,
    type: 'map',
    series: [{ id: 'usMap', map: 'us' }],
    defaultPoint: {
        label_text: '%stateCode'
    }
};

export const CovidMap = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get(covidUrl).then((data) => {
    //         console.log(data);
    //         setData(data);
    //     });
    // }, []);

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