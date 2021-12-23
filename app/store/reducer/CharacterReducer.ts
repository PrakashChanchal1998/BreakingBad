import { API_CALL,FAVOURATE_LIST,REMOVE_LIST,PROFILE_DETAIL } from "../action/Count";
import Axios from "axios"
const initialState = {
characterDetails: [],
favourateList:[],
character:{}
};
const characterReducer = (state = initialState, action) => {
switch(action.type) {
case API_CALL:
    return{
         
         ...state,
         characterDetails:action.payload
    }
case FAVOURATE_LIST:
     return{
          ...state,
          favourateList:[...state.favourateList,action.payload],
     }
case REMOVE_LIST:
     return{
          ...state,
          favourateList:action.payload
     }
case PROFILE_DETAIL:
     return{
          ...state,
          character:action.payload
          }
default:
return state;
}
}
export default characterReducer;