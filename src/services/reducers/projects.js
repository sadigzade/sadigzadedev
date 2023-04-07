import {
  PROJECTS_REQUEST,
  PROJECTS_REQUEST_ERROR,
  PROJECTS_REQUEST_SUCCESS,
  SET_PROJECT_IMAGE,
} from "../constants/projects";

const initialState = {
  projects: [],
  error: null,
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_REQUEST: {
      return {
        ...state,
      };
    }
    case PROJECTS_REQUEST_SUCCESS: {
      return {
        ...state,
        projects: action.projects,
      };
    }
    case PROJECTS_REQUEST_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case SET_PROJECT_IMAGE: {
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.id ? { src: action.src, ...project } : project,
        ),
      };
    }
    default: {
      return state;
    }
  }
};
