import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    notesReducer,
    userReducer
});

export default rootReducer;