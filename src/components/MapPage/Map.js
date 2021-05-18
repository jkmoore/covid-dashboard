import "../../App.css";
import React from "react";
import { geoCentroid } from "d3-geo";
import { ComposableMap, Geographies,  Geography,  Marker,  Annotation } from "react-simple-maps";

import allStates from "./allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

export const CovidMap = () => {
    //var myApiKey = 'AIzaSyDd893v03RtN8d-grfdUq3Y6w6Ll-vDkNE'
    return(
        <main className="container">
            <h2 className="header">Map: US map. Should be able to display data when hovering over the state.</h2>
            <p className="text">Can also click on a state and view data per county within the state</p>
            <ComposableMap projection="geoAlbersUsa">
                <Geographies geography={geoUrl}>
                    {({ geographies }) => (
                    <>
                        {geographies.map(geo => (
                        <Geography
                            key={geo.rsmKey}
                            stroke="#FFF"
                            geography={geo}
                            fill="#DDD"
                        />
                        ))}
                        {geographies.map(geo => {
                        const centroid = geoCentroid(geo);
                        const cur = allStates.find(s => s.val === geo.id);
                        return (
                            <g key={geo.rsmKey + "-name"}>
                            {cur &&
                                centroid[0] > -160 &&
                                centroid[0] < -67 &&
                                (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                                <Marker coordinates={centroid}>
                                    <text y="2" fontSize={14} textAnchor="middle">
                                    {cur.id}
                                    </text>
                                </Marker>
                                ) : (
                                <Annotation
                                    subject={centroid}
                                    dx={offsets[cur.id][0]}
                                    dy={offsets[cur.id][1]}
                                >
                                    <text x={4} fontSize={14} alignmentBaseline="middle">
                                    {cur.id}
                                    </text>
                                </Annotation>
                                ))}
                            </g>
                        );
                        })}
                    </>
                    )}
                </Geographies>
            </ComposableMap>
        </main>
        /*
        <main className="mapBody">
            <h2 className="header">Map: US map. Should be able to display data when hovering over the state.</h2>
            <p className="text">Can also click on a state and view data per county within the state</p>
            <div className="chartContainer">
            
            </div>
        </main>*/
    );
}