import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import {Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import ChartDisplay from './ChartDisplay';




const ChartComponent = () => {

    const [budgetData, setbudgetData] = useState([]);
    const [projectIdData, setprojectIdData] = useState([]);
    const [chartData, setchartData]  = useState([]);
    
    const chartRef = useRef([]);

    // const [chart, setchart] = useState({
    //     labels: chartRef.current.map((project)=> {return project.project_id} ),
    //     datasets:[{
    //         fill: true,
    //         label:"Project ID",
    //         data: chartRef.current.map((project)=> {return project.budget}),
    //         borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',

    //     }]
    // })

    useEffect(() => {
        axios.get("http://localhost:3001/report/pdfreport")
        .then((response)=>{
            console.log(response.data)
            setchartData(response.data);
            chartRef.current = [...response.data];
            console.log(chartRef.current);
            setchartData((prevState)=>{
                return prevState;
            });
            // setbudgetData(chartRef.current.map((budgetDat)=>{
            //     return (budgetDat.budget);
            // }));

            // setbudgetData((prevState)=>{
            //   return prevState
            // })

            // setprojectIdData(chartRef.current.map((proIdData)=>{
            //     return (proIdData.project_id);
            // }))

            // setprojectIdData((prevState)=>{
            //     return prevState;
            // })
            console.log(chartRef.current)
            

        })
    }, [])
    
    
    
  return (
    <div>
         {chartData && <ChartDisplay item={chartData}/>}
             
              </div>
  )
}

export default ChartComponent;