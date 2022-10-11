import React from 'react'
import { Line } from 'react-chartjs-2';

const options = {
    responsive: true,

    scales: {
  x: {
    grid: {
      display: false
    },
    title:{
        display:true,
        text:"Project ID",
        font:{
            weight:"bold",
            size:"20"
        }
    }
  },
  y: {
    grid: {
      display: false,
     
    },
    suggestedMin:20,
    title:{
        display:true,
        text:"₹ Crore",
        font:{
            weight:"bold",
            size:"20"
        }
    },
    ticks: {
        stepSize: 30
    }
  }
},
    plugins: {
        legend: {
            display: false,
         },
      title: {
        display: true,
        text: 'Project Budget',
        font:{
            weight:"bold",
            size:"20"
        }
      },
      
    },
  };

const ChartDisplay = (props) => {

  return (
    <div>
         { props.item && 
           (<Line options={options} data={{
            labels: props.item.map((project)=> {return project.project_id} ),
        datasets:[{
            fill: true,
            label:"Project Id",
            data: props.item.map((project)=> {return project.budget}),
            borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        pointStyle:'circle',
        }]
        }}/>)}
    </div>
  )
}

export default ChartDisplay