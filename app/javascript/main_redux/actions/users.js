import {
  INDEX_STUDENT,
  INDEX_TEACHER,
  SET_CURRENT_USER,
} from "../constants/users";

export const studentIndex = (users) => ({
  type: INDEX_STUDENT,
  value: users,
});

export const teacherIndex = (users) => ({
  type: INDEX_TEACHER,
  value: users,
});

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  value: user,
});
