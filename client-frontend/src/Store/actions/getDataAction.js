import { GET_DATA } from "../Types";

// function of getposts that return a dispatch,
// i can call the dispatch function later in the component
// this why i need thunk to handling this case
export const getPosts = () => (dispatch) => {
    console.log("getPosts");
  fetch("http://localhost:3001/dsahboard")
    .then((response) => response.json())
    .then((data) => {
      // this is the data that action had in postReducer.js
      // the action will get 2 data: type and payload

      dispatch({
        type: GET_DATA,
        payload: data,
      });
     
    })
    .catch((e) => {
      console.error("getPosts() error: " + e);
    });
};