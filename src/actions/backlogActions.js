import axios from "axios";
import { GET_ERRORS, GET_BACKLOG, GET_PROJECT_TASK } from "./types";

export const addProjectTask =
  (backlog_id, project_task, history) => async (dispatch) => {
    try {
      await axios.post(`/api/backlog/${backlog_id}`, project_task);
      history.push(`/projectBoard/${backlog_id}`);
      dispatch({
        type: GET_ERRORS,
        payload: {},
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    }
  };

export const getBacklog = (backlog_id) => async (dispatch) => {
  try {
    console.log("mpike");
    const res = await axios.get(`/api/backlog/${backlog_id}`);
    console.log(res);
    dispatch({
      type: GET_BACKLOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getProjectTask =
  (backlog_id, pt_id, history) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/backlog/${backlog_id}/${pt_id}`);
      dispatch({
        type: GET_PROJECT_TASK,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      history.push("/dashboard");
    }
  };