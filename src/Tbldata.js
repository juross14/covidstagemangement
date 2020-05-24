import React from 'react'

// Display all the props and data
const Covidtable = props => {
  return (
    <div className="tableview">
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Country</th>
            <th>Total Cases</th>
            <th>Total Recovery</th>
            <th>Total Deaths</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.covidresultprops.length > 0 ? (
            props.covidresultprops.map(covid => (
              <tr key={covid.id}>
                <td>
                  <img
                    src={covid.flag}
                    alt={covid.country}
                    title={covid.covid_log}
                  />
                  <abbr title={covid.covid_log} className="tooltipup">
                    hover me
                  </abbr>
                </td>
                <td>{covid.country}</td>
                <td>{covid.total_cases}</td>
                <td>{covid.total_recovered}</td>
                <td>{covid.total_deaths}</td>
                <td>
                  <button
                    className="button muted-button"
                    onClick={() => props.deletecovidprop(covid.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="bookmarks-result">
                No Bookmarks
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Covidtable
