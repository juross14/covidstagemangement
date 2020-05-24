import React, { useState } from 'react'

const AddUserForm = props => {
  //Each Component Initiatlization
  const initialFormState = {
    id: null,
    country: '',
    total_cases: '',
    total_recovered: '',
    covid_log: ''
  }

  const [covidData, setcovidData] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target
    setcovidData({ ...covidData, [name]: value })
    //console.log(covidData)
  }

  return (
    <div className="form2add">
      <form
        onSubmit={event => {
          event.preventDefault()
          props.addUserprop(covidData)
          setcovidData(initialFormState)
        }}
      >
        <textarea
          type="text"
          name="covid_log"
          value={covidData.covid_log}
          placeholder="Leave your Comments (Optional) , you can add either"
          onChange={handleInputChange}
        />
        <button>Add Covid log</button>
      </form>
    </div>
  )
}

export default AddUserForm
