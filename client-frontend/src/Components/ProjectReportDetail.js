import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProjectReportDetail = () => {

  const [getTableData, setgetTableData] = useState([]);
  const [signButton, setsignButton] = useState(false);
  // let tempData = [];

  useEffect(() => {
    axios.get("http://localhost:3001/dashboard")
    .then((response)=>{
      // tempData = [...response.data]
      setgetTableData(response.data);
      // console.log(tempData)
        setgetTableData((prevState)=>{
        // console.log(prevState);
            return prevState;
            
        });
    })

  }, []);

  const handleGeneratePdf = () => {
    axios.post('http://localhost:3002/generatePDF',{
      projectData:getTableData,
      sign:signButton
    })
    .then(()=>{
        alert("PDF Succesfully sent to server")
        // console.log(getTableData);
    }).catch((err)=>{
      console.log(err);
    })
  }

  const handleSign = () => {
    setsignButton(!signButton);
    // console.log(signButton);
  }
  
  return (
    <div className='container'>
      <table className="table table-hover">
  <thead>
    <tr>
      
      <th scope="col">ProjectID</th>
      <th scope="col">Project Name</th>
      <th scope="col">Budget ₹ Crore</th>
    </tr>
  </thead>
  <tbody>
    { getTableData && getTableData.map((data,index)=>{
       return (<tr key={index}>
        <td key={data.project_id}>{data.project_id}</td>
        <td key={data.project_name}>{data.project_name}</td>
        <td key={data.budget}>{data.budget}</td>
        </tr>)
      

    })}


    
    
  </tbody>

 
</table>

    <div className='btn-group-vertical float-right'>
    <div className='float-right ml-5 my-3'>
    <button className='btn btn-outline-secondary font-weight-bold btn-lg' onClick={handleSign}>
      {signButton ? (<span><span>Unsign</span><sup>&#128512;</sup></span>) : (<span><span>Sign</span><sup>&#128512;</sup></span>)}
    </button>
    </div>
    
    <div className='float-right my-3'>
    <button className='btn btn-outline-secondary font-weight-bold btn-lg'
                onClick={handleGeneratePdf} >
      Generate PDF</button>
    </div>
    </div>
    </div>
    
  )
}

export default ProjectReportDetail