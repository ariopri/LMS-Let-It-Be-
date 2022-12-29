import axios from 'axios';
import Swal from 'sweetalert2';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN_START = 'SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_OUT = 'SIGN_OUT';

export const signUp = user => {
  return {
    type: SIGN_UP,
    isLoggedIn: true,
    user,
  };
};

export const signInStart = () => {
  return {
    type: SIGN_IN_START,
  };
};

export const signInSuccess = (token, user) => {
  return {
    type: SIGN_IN_SUCCESS,
    isLoggedIn: true,
    token,
    user,
  };
};

export const signInFailure = error => {
  return {
    type: SIGN_IN_FAILURE,
    error,
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGN_OUT,
  };
};

export const signUpAsync = user => {
  return async dispatch => {
    const response = await axios.post(
      'http://localhost:8080/api/v1/auth/signup',
      user,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    dispatch(signUp(response.data));
  };
};

export const signInAsync = user => {
  return async dispatch => {
    dispatch(signInStart());
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/signin',
        {
          email: user.email,
          password: user.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      const token = response.data.token;
      const user = response.data.user;
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('id', JSON.stringify(response.data.data.id));
      dispatch(signInSuccess(token, user));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.href = '/dashboard';
      });
    } catch (error) {
      dispatch(signInFailure(error));
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Login Failed',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};

export const signOutAsync = () => {
  return async dispatch => {
    localStorage.removeItem('token');
    dispatch(signOutSuccess());
  };
};
