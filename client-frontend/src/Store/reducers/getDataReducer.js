import { GET_DATA } from "../Types"; // my types

// initial the post state
const initState = {
    getData: [],
}

// depends on post action.type (actions.type value will handle by actions later), what will reducers pass to state.
export default (state = initState, action) => {
    switch(action.type){
        case GET_DATA:
            return {
                ...state,
                getData: action.payload
            }

        default: return state
    }
}