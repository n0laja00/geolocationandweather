
import './App.css';
import {useState, useEffect} from 'react';
import Weather from './Weather';
import Geolocation from './Geolocation';


const API_URL ='https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'http://openweathermap.org/img/wn/'
const API_KEY = '';

//Kysymys opettajalle: Miten nämä componentit oltaisiin saatu kommunikoimaan toistensa kanssa? Minä halusin aluksi saada geolocationista nuo Latit ja Lng:t, mutta en vaan saanut millään toimimaan, joten tein näin.
function App() {

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
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-5">
              <div>
                <Geolocation lat={lat} lng={lng}/>
              </div> 
              <div> 
                <Weather lat={lat} lng={lng}/>     
              </div> 
          </div>   
        </div>
      </div>
)
  }


}


export default App;
