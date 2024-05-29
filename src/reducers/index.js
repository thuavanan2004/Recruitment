import loginReducer from "./loginReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    loginReducer
})
    
export default allReducers;