import React, { useContext } from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'
import { Covidcontext } from './Statemng'

const Covidchart = props => {
  const [covid] = useContext(Covidcontext)
  const covidchart = covid

  const converdata1 = covidchart.total_cases.replace(/,/g, '')
  const converdata2 = covidchart.total_recovered.replace(/,/g, '')
  const converdata3 = covidchart.total_deaths.replace(/,/g, '')

  let covidbardata = []
  covidbardata = [converdata1, converdata2, converdata3]

  let covidlabel = ['Total Cases', 'Total Recovery', 'Total Deaths']
  const data = {
    labels: covidlabel,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: covidbardata
      }
    ]
  }

  const datadonut = {
    labels: covidlabel,
    datasets: [
      {
        data: covidbardata,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  }

  return (
    <div className="chartset">
      <h2>{covidchart.country}</h2>
      <Bar data={data} />
      <Doughnut data={datadonut} />
    </div>
  )
}

export default Covidchart
