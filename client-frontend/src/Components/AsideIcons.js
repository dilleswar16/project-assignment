import React from 'react'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import { grey } from '@material-ui/core/colors';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MultilineChartRoundedIcon from '@material-ui/icons/MultilineChartRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const AsideIcons = () => {

    const navigate = useNavigate();

    const handleCreateProject = (e) => {
        navigate('/createproject');
    }

  return (
    <div className=''>
         <div className="mt-4 mb-4 text-right mr-5">
        <Button variant="outlined" color="primary" onClick={handleCreateProject}>Create A Project</Button>
      </div>
      <div style={{position:'fixed'}}>
        <div >
          <aside className="float-left">
            <div className="d-flex flex-column aligns-items-center mt-auto">

              <div className="align-self-center ml-2 my-5" >
                <Button onClick={() => {
                  navigate('/');
                }}><HomeRoundedIcon style={{
                  backgroundColor: grey[300],
                  fontSize: 60
                }} /></Button>
              </div>
              <div className="align-self-center ml-2 my-5">
              <Button onClick={() => {
                  navigate('/report/pdfreport')
                }}>
                <InfoRoundedIcon style={{
                  backgroundColor: grey[300],
                  fontSize: 60
                }} />
                </Button>
              </div>
              <div className="align-self-center ml-2 my-5" >
              <Button onClick={() => {
                  navigate("report/allprojectbudgetplot")
                }}>
                <MultilineChartRoundedIcon style={{
                  backgroundColor: grey[300],
                  fontSize: 60
                }} />
                </Button>
              </div>

            </div>
          </aside>
        </div></div>
    </div>
  )
}

export default AsideIcons