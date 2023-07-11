import React from 'react'

const ResultComponent = ({selectedCity,selectedState}) => {
  return (
    <div>
    <h4>

You have selected State is {selectedState}  and city is {selectedCity}
</h4>

    </div>
  )
}

export default ResultComponent