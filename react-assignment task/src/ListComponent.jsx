import React from "react";
import CitiesListComponent from "./CitiesListComponent";

const ListComponent = ({
  states,
  selectedState,
  handleStateChange,
  handleFormSubmit,
}) => {
  return (
    <div>
      <pre>{JSON.stringify(states)}</pre>
      <select
        value={selectedState}
        onChange={handleStateChange}
        className="form-control-lg"
      >
        <option value="">Select State</option>

        {states.map((state, index) => (
          <option key={index} value={state.id}>
            {state.stateName}
          </option>
        ))}
      </select>
      {/* <CitiesListComponent handleCityChange={handleFormSubmit} /> */}
      <button className="btn btn-primary ml-4" onClick={handleFormSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ListComponent;
