import {
  INDEX_STUDENT,
  INDEX_TEACHER,
  SET_CURRENT_USER
} from "../constants/users";
import { toast } from "react-toastify";

let initialState = {
  teachers: [],
  students: [],
  currentUser: ""
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case INDEX_STUDENT: {
      return { ...state, students: action.value };
    }
    case INDEX_TEACHER: {
      return { ...state, teachers: action.value };
    }
    case SET_CURRENT_USER: {
      return { ...state, currentUser: action.value };
    }
    default: {
      return state;
    }
  }
};

export default UserReducer;
