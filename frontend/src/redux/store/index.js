import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducer/authReducer';
import userReducer from '../reducer/user';

const allReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const store = createStore(allReducer, applyMiddleware(thunk));

export default store;
