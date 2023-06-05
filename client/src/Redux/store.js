import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./Reducers/TaskReducer";

const store = configureStore({
    reducer:{
       ListTasks : TaskReducer
    }
})





export default store