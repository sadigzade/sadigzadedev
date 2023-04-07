import { combineReducers } from "redux";
import { projectsReducer } from "./projects";

export const rootReducer = combineReducers({
  projects: projectsReducer,
});
