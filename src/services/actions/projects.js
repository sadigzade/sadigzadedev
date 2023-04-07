import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../../firebase";
import {
  PROJECTS_REQUEST,
  PROJECTS_REQUEST_ERROR,
  PROJECTS_REQUEST_SUCCESS,
  SET_PROJECT_IMAGE,
} from "../constants/projects";

const projectsRequest = () => {
  return {
    type: PROJECTS_REQUEST,
  };
};

const projectsRequestSuccess = (projects) => {
  return {
    type: PROJECTS_REQUEST_SUCCESS,
    projects,
  };
};

const projectsRequestError = (error) => {
  return {
    type: PROJECTS_REQUEST_ERROR,
    error,
  };
};

const setProjectImage = (id, src) => {
  return {
    type: SET_PROJECT_IMAGE,
    id,
    src,
  };
};

export const projectsRequestFetch = () => async (dispatch) => {
  dispatch(projectsRequest());

  try {
    const response = await getDocs(collection(db, "projects"));
    const projects = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    dispatch(projectsRequestSuccess(projects));
  } catch (error) {
    dispatch(projectsRequestError(error));
  }
};
