import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {  useState } from "react";
import img1 from './images/weather.png';
import './App.css';



function App() {
  
  const apikey ="f56f24967aaf51182d1d4df628297c6d";
  const [inputcity, setInputCity]= useState("")
  const [data, setData] = useState({})

  const getWeather = (cityName) =>{
    if(!cityName) return
    const apiURL ="https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=" +apikey
    axios.get(apiURL).then((res)=>{
     // console.log("response", res.data)
      setData(res.data)
    }).catch((err)=>{
     // console.log("err",err)
    })
  }
  const handleChangeInput = (e)=>{
    //console.log((e.target.value))
    setInputCity(e.target.value)
  }
  const hendelSearch = ()=>{
    getWeather(inputcity)
    
  }

  return (
    <div className="col-md-12">
     <div className="wetherBg">
      <h1 className="head">Weather App</h1>

      <div className="d-grid gap-3 col-4 mt-4">
      <input type="text" placeholder="Enter City Name" className="form-control"
       onChange={handleChangeInput}/>
      <button className="btn btn-primary" type="button"
      onClick={hendelSearch}>Search</button>
      </div>
     </div>

     {Object.keys(data).length > 0 &&
     <div className="col-md-12 text-center mt-5">
      

      <div  className="shadow rounded wetherResultBox">
        <img className="icon"
         src={img1} alt="" />

         <h5 className="city">{data?.name}</h5>
         <h6 className="tem">{((data?.main?.temp) - 273.15).toFixed(2)} °C</h6>
        
      </div>
     </div>
     }
    </div>
  );
}

export default App;
