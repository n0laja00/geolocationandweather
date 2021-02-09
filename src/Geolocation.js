import React from 'react'
import {useState, useEffect} from 'react';

export default function Geolocation({lat,lng}) {

    
    return (
        <div className="geolocation-container">
            <h3>Position:</h3>
            <div>
                <p>Lat: {lat.toFixed(3)}  </p> 
              </div>
              <div>
                <p>Lng: {lng.toFixed(3)} </p>
              </div> 
        </div>
    )
}
