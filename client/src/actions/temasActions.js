import axios from "axios";

import { IMAGE_LOADING, GET_ERRORS, GET_IMAGE } from "./types";

// Crear tema
export const createTema = (temaData, history) => dispatch => {
  axios
    .post("/api/temas/tema", temaData)
    .then(res => (window.location = "/dashimage"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getTemas = () => dispatch => {
  axios
    .get("api/temas/")
    .then(res =>
      dispatch({
        type: GET_IMAGE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_IMAGE,
        payload: {}
      })
    );
};

export const getCurrentTema = id => dispatch => {
  axios
    .get(`/api/temas/tema/${id}`)
    .then(res =>
      dispatch({
        type: GET_IMAGE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_IMAGE,
        payload: {}
      })
    );
};

export const getAllTemas = () => dispatch => {
  axios
    .get("api/temas/all")
    .then(res =>
      dispatch({
        type: GET_IMAGE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_IMAGE,
        payload: {}
      })
    );
};

// Delete AddCurso
export const deleteTema = id => dispatch => {
  axios
    .delete(`/api/temas/temas/${id}`)
    .then(res => (window.location = "/dashimage"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
