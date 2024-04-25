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
    user: {
      name: {
        UserImage: "",
        activated: "",
        _id: "",
        Firstname: "",
        Middlename: "",
        Lastname: "",
        email: "",
        PhoneNumber: "",
        HomeLocation: "",
        DateoFBirth: "",
        password: "",
        userType: "",
      }
    },
    accessToken: {
      accessToken: ""
    },
    refreshToken: {
      refreshToken: ""
    }
  }
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case AUTHENTICATED_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
        };
  
      case LOGIN_SUCCESS:
        localStorage.setItem('access', payload.access);
        console.log(payload)
        return {
          ...state,
          user: {
      name: {
        UserImage: payload.your_user.name.UserImage.name ,
        activated: payload.your_user.name.activated,
        _id: payload.your_user.name._id,
        Firstname:payload.your_user.name.Firstname,
        Middlename: payload.your_user.name.Middlename,
        Lastname: payload.your_user.name.Lastname,
        email: payload.your_user.name.email,
        PhoneNumber: payload.your_user.name.PhoneNumber,
        HomeLocation: payload.your_user.name.HomeLocation,
        DateoFBirth: payload.your_user.name.DateoFBirth,
        password: payload.your_user.name.password,
        userType: payload.your_user.name.userType,
      }
    },
    accessToken: {
      accessToken: payload.accessToken.accessToken
    },
    refreshToken: {
      refreshToken: payload.refreshToken.refreshToken
    }
        };
      case USER_LOADED_SUCCESS:
        return {
          ...state,
          user: payload,
        };
  
      case AUTHENTICATED_FAILED:
        return {
          ...state,
          isAuthenticated: false,
        };
      case USER_LOADED_FAIL:
        return {
          ...state,
          user: null,
        };
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        return {
          ...state,
          customer: {
            Id: null,
          },
          token: null,
          refreshToken: null,
          isAuthenticated: false,
          user: null,
        };
      case PASSWORD_RESET_FAIL:
      case PASSWORD_RESET_SUCCESS:
      case PASSWORD_RESET_CONFIRM_FAIL:
      case PASSWORD_RESET_CONFIRM_SUCCESS:
        return {
          ...state,
        };
  
      default:
        return state;
    }
  }