import { GET_ALL_USERS, GET_USER_BY_ID } from '../action/user';

const initialState = {
  user: [],
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        user: action.users,
        isLoading: false,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        user: action.user,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
