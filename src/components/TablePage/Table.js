import "../../App.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

let url = 'https://api.caw.sh/v3/covid-19/states';
const names = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
let states = [];

export const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url).then((resp) => {
            let info = resp.data;
            console.log(info)
            info.forEach(element => {
                if(names.includes(element.state)){
                    states.push(element);
                }
            });
            setData(states);
        });
    }, []);

    const renderStates = (state, index) => {
        return(
            <tr className="tableRow" key={index}>
                <td className="item">{state.state}</td>
                <td className="item">{state.population}</td>
                <td className="item">{state.cases}</td>
                <td className="item">{state.todayCases}</td>
                <td className="item">{state.casesPerOneMillion}</td>
                <td className="item">{state.deaths}</td>
                <td className="item">{state.todayDeaths}</td>
                <td className="item">{state.deathsPerOneMillion}</td>
                <td className="item">{state.tests}</td>
                <td className="item">{state.testsPerOneMillion}</td>
            </tr>
        )
    }

    return(
        <main className="container">
            <h2 className="header">Table</h2>
            <ReactBootStrap.Table className="table">
                <thead className="tableHead">
                    <tr>
                    <th className="colHead">State</th>
                    <th className="colHead">Population</th>
                    <th className="colHead">Total Cases</th>
                    <th className="colHead">Todays Cases</th>
                    <th className="colHead">Cases Per Million</th>
                    <th className="colHead">Total Deaths</th>
                    <th className="colHead">Todays Deaths</th>
                    <th className="colHead">Deaths Per Million</th>
                    <th className="colHead">Total Tests</th>
                    <th className="colHead">Tests Per Million</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {data.map(renderStates)}
                </tbody>
            </ReactBootStrap.Table>
        </main>
    );
}