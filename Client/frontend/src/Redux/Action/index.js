import axios from "axios";
import {
  CLIENT_MESSAGE_FAILURE,
  CLIENT_MESSAGE_REQUEST,
  CLIENT_MESSAGE_SUCCESS,
} from "../Constants";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

export const handleClientMessage = (formData) => async (dispatch) => {
  dispatch({ type: CLIENT_MESSAGE_REQUEST });
  try {
    const response = await axios.post("/api/client-message", formData);
    if (response.data.success) {
      dispatch({
        type: CLIENT_MESSAGE_SUCCESS,
        payload: response.data.message,
      });
    }
    else{
      dispatch({
        type: CLIENT_MESSAGE_FAILURE,
        payload: error.response.data.message,
      });
    }
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: CLIENT_MESSAGE_FAILURE,
      payload: error.response.data.message,
    });
  }
};
