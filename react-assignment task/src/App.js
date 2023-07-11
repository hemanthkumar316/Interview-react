import React, { useState, useEffect } from "react";
import ListComponent from "./ListComponent";
import axios from "axios";
import ResultComponent from "./ResultComponent";
import CitiesListComponent from "./CitiesListComponent";
const App = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  useEffect(() => {
    fetchStates();
  }, []);
  //method 1
  //fetching the list of states
  const fetchStates = async () => {
    try {
      const response = await fetch("https://api.minebrat.com/api/v1/states");
      if (!response.ok) {
        throw new Error("failed to fetch states");
      }
      const data = await response.json();
      setStates(data);
    } catch (error) {
      console.log("Error fetching states :", error);
    }
  };

  //method 2

  // const fetchStates=async()=>{
  //   // const response=await axios.get('https://api.minebrat.com/api/v1/states')
  //   // console.log(response.data)
  // }

  //method 3

  // const fetchStates=async()=>{
  //   try{
  //     const response=await axios.get('https://api.minebrat.com/api/v1/states')
  //     setStates(response.data)
  //   }
  //   catch(err){
  //     console.log('failed to fetch',err)
  //   }
  // }

  const handleStateChange = (event) => {
    const selectedStateId = event.target.value;
    setSelectedState(selectedStateId);

    // Fetch the list of cities for the selected state
    if (selectedStateId) {
      axios
        .get(`http://api.minebrat.com/api/v1/states/cities/${selectedStateId}`)
        .then((response) => {
          setCities(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setCities([]);
    }
  };
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleFormSubmit = () => {
    if (selectedState) {
      console.log("selected state", selectedState);
      console.log("selected city", selectedCity);
    } else {
      console.log("please select state and city");
    }
  };
  return (
    <div>
      <ListComponent
        states={states}
        selectedState={selectedState}
        handleStateChange={handleStateChange}
        handleFormSubmit={handleFormSubmit}
      />
      <CitiesListComponent
        cities={cities}
        handleCityChange={handleCityChange}
      />
      <ResultComponent
        selectedCity={selectedCity}
        selectedState={selectedState}
      />
    </div>
  );
};

export default App;
