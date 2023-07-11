import React from "react";

const CitiesListComponent = ({ cities, handleCityChange }) => {
  return (
    <div>
      <select className="form-control-lg mt-4" onChange={handleCityChange}>
        <option value="">Select a city</option>
        {cities &&
          cities.length > 0 &&
          cities.map((city,index) => (
            <option key={index} value={city.cityName}>
              {city.cityName}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CitiesListComponent;
