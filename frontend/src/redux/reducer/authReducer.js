import {
  SIGN_UP,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT,
} from '../action/authAction';

const initialState = {
  isLoggedIn: false,
  role: '',
  token: '',
  user: [],
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    case SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        token: action.token,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        error: action.error,
      };
    case SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
        token: '',
      };
    default:
      return state;
  }
};

export default authReducer;
