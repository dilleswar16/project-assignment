import { Box, Button, Container, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react"; // import useEffect because using of react hooks
import { connect } from "react-redux"; // to connect the state and dispatch from the store to App.js props
import ProjectCard from "./Components/ProjectCard";
import { getPosts } from "./Store/actions/getDataAction"; // import getPosts() action from the store actions
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import IndividualProjectDetails from "./Components/SingleProjectDetails/IndividualProjectDetails";
import ProjectReportDetail from "./Components/ProjectReportDetail";
import ChartComponent from "./Components/Charts/ChartComponent";
import AsideIcons from "./Components/AsideIcons";
import CreateProject from "./Components/CreateProject";
// import { useNavigate } from 'react-router-dom';



// function App({posts,getPosts}) {
function App() {
  //   useEffect(() => {
  //     getPosts();
  //   }, []);

  // const navigate = useNavigate();


  return (

    <Router>
     
        <AsideIcons />

        <div className="container" style={{ position: "inherit" }}>

          <Routes>
            <Route exact path='/' element={< ProjectCard />}></Route>
            <Route exact path='/dashboard' element={< ProjectCard />}></Route>
            <Route exact path="/project/:id" element={< IndividualProjectDetails />}></Route>
            <Route exact path="/report/pdfreport" element={< ProjectReportDetail />}></Route>
            <Route exact path="/report/allprojectbudgetplot" element={<ChartComponent />}> </Route>
            <Route exact path="/createproject" element={<CreateProject />}></Route>
            

          </Routes>



        </div>
     
    </Router>

  );

}
// const mapStateToProps = (state) => ({
//   posts: state.getData, // post is the key name i'm using in combine reducer
// });

// // mapping the store actions to App.js. props
// const mapDispatchToProps = (dispatch) => ({
//   getPosts: () => dispatch(getPosts()),
// });

// // connect the mapping to App.js props
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

