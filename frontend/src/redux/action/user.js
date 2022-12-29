import axios from 'axios';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';

const getAllUsersSuccess = users => {
  return {
    type: GET_ALL_USERS,
    users,
  };
};

export const getUserByIdSuccess = user => {
  return {
    type: GET_USER_BY_ID,
    user,
  };
};

export const getAllUsers = () => {
  return async dispatch => {
    const response = await axios.get('https://localhost:8080/api/v1/users');
    dispatch(getAllUsersSuccess(response.data));
  };
};
