import React from 'react'
import {useState, useEffect} from 'react';
import Weather from './Weather';
export default function Geolocation() {

  const [lat, setLat] = useState(0); 
  const [lng, setLng] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect (() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          setIsLoading(false);
      }, (error) => {
        alert(error);
      })
    } else {
      alert('Your Browser does not support geolocation!')
    }
  }, [])



  if (isLoading) {
    return <p>Loading...</p>;
  }
  else {
    
    return (
        <div className="geolocation-container">
            <h3>Position:</h3>
            <div>
                <p>Lat: {lat.toFixed(3)}  </p> 
              </div>
              <div>
                <p>Lng: {lng.toFixed(3)} </p>
              </div> 
              <div> 
                <Weather lat={lat} lng={lng}/>     
              </div> 
        </div>
    )
  }
}
