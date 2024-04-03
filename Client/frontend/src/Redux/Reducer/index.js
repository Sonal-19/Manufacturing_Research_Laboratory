import {
  CLIENT_MESSAGE_FAILURE,
  CLIENT_MESSAGE_REQUEST,
  CLIENT_MESSAGE_SUCCESS,
} from "../Constants";

const messageInitialState = {
  isLoading: false,
  success: "",
  failure: "",
};

const reducer = (state = messageInitialState, action) => {
  switch (action.type) {
    case CLIENT_MESSAGE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CLIENT_MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload,
      };
    case CLIENT_MESSAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    default:
      return { state };
  }
};

export { reducer };
