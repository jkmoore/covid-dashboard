import "../../App.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

let url = 'https://api.caw.sh/v3/covid-19/states';
const names = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
let states = [];

export const Table = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(url).then((resp) => {
            let info = resp.data;
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
            <tr key={index}>
                <td>{state.state}</td>
                <td>{state.population}</td>
                <td>{state.cases}</td>
                <td>{state.deaths}</td>
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
                    <th className="colHead">Cases</th>
                    <th className="colHead">Deaths</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {data.map(renderStates)}
                </tbody>
            </ReactBootStrap.Table>
        </main>
    );
}