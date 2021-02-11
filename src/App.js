
import './App.css';
import {useState, useEffect} from 'react';

import Geolocation from './Geolocation';


const API_URL ='https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'http://openweathermap.org/img/wn/'
const API_KEY = '';


function App() {

    return (
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-5">
              <div>
                <Geolocation/>
              </div> 
          </div>   
        </div>
      </div>
    )
  }





export default App;
