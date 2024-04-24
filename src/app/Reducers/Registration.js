import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAILED,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,
    LOGOUT,
  } from '../Actions/types';
  
  const initialState = {
    customer: {
      Id: null,
      Name: null,
    },
    token: null,
    refreshToken: null,
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case USER_CREATE_SUCCESS:
            localStorage.setItem('access', payload.access);
            return {
              ...state,
              customer: {
                Id: payload.customer.Id,
                Name: payload.customer.customer,
              },
              token: payload.token,
              refreshToken: payload.refreshToken,
            };
  
      
  
      default:
        return state;
    }
  }