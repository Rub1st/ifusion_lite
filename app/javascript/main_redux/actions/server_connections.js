import axios from "axios";
import { setErrors, dropError } from "./errors";

//index
export const get = (path, setter) => (dispatch) => {
  axios
    .get(`http://localhost:3000/${path}`)
    .then((response) => {
      dispatch(setter(response.data));
      dispatch(setErrors([]));
    })
    .catch((error) => dispatch(setErrors(error.response.data.errors)));
};

//destroy
export const destroy = (id, path, setter) => (dispatch) => {
  axios
    .delete(`http://localhost:3000/${path}/${id}`, {
      "Content-Type": "application/x-www-form-urlencoded",
    })
    .then((response) => {
      dispatch(setter(response.data));
      dispatch(setErrors([]));
    })
    .catch((error) => dispatch(setErrors(error.response.data.errors)));
};

//update
export const update = (obj, path, setter) => (dispatch) => {
  axios
    .put(`http://localhost:3000/${path}/${obj.id}`, obj, {
      "Content-Type": "application/x-www-form-urlencoded",
    })
    .then((response) => {
      dispatch(setter(response.data));
      dispatch(setErrors([]));
    })
    .catch((error) => dispatch(setErrors(error.response.data.errors)));
};


//create
export const post = (obj, path, setter) => (dispatch) => {
  console.log(obj)
  axios
    .post(`http://localhost:3000/${path}`, obj, {
      "Content-Type": "application/x-www-form-urlencoded",
    })
    .then((response) => {
      dispatch(setter(response.data));
      dispatch(setErrors([]));
    })
    .catch((error) => dispatch(setErrors(error.response.data.errors)));
};

//logout
export const logout = () => (dispatch) => {
  axios
    .delete(`http://localhost:3000/users/sign_out`, {
      "Content-Type": "application/x-www-form-urlencoded",
    })
    .then((response) => (location.href = "/"))
    .catch((error) => (location.href = "/users/sign_in"));
};

//for impersonation

//impersonate
export const impersonate = (id, ord_id) => (dispatch) => {
  axios
    .post(
      `http://localhost:3000/users/${id}/impersonate?org_id=${ord_id}`,
      ord_id,
      {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    )
    .then((response) => (location.href = "/"))
    .catch((error) => dispatch(dropError(error.response)));
};

//stop impersonating
export const stopImpersonating = () => (dispatch) => {
  axios
    .post(
      `http://localhost:3000/users/stop_impersonating`,
      {},
      {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    )
    .then((response) => (location.href = "/"))
    .catch((error) => dispatch(dropError(error.response)));
};