import {User} from '../models/user.model';
import {UsersActions, UsersActionsTypes} from '../actions/user.actions';
import {Action} from '@ngrx/store';

export enum UsersStateEnum{
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial"
}
export interface UsersState{
    USERS:User[],
    errorMessage:string,
    dataState:UsersStateEnum
}

const initState:UsersState={
  USERS:[],
  errorMessage:"",
  dataState:UsersStateEnum.INITIAL
}



export function USERSReducer(state=initState, action:Action):UsersState {
  switch (action.type) {
    case UsersActionsTypes.GET_ALL_USERS:
      return {...state, dataState:UsersStateEnum.LOADING }
    case UsersActionsTypes.GET_ALL_USERS_SUCCESS:
      return {...state, dataState:UsersStateEnum.LOADED, USERS:(<UsersActions>action).payload}
    case UsersActionsTypes.GET_ALL_USERS_FAILED:
      return {...state, dataState:UsersStateEnum.ERROR, errorMessage:(<UsersActions>action).payload}
    /* Get USER by Login*/
    case UsersActionsTypes.GET_USER_BYLOGIN:
      return {...state, dataState:UsersStateEnum.LOADING }
    case UsersActionsTypes.GET_USER_BYLOGIN_SUCCESS:
      return {...state, dataState:UsersStateEnum.LOADED, USERS:(<UsersActions>action).payload}
    case UsersActionsTypes.GET_USER_BYLOGIN_FAILED:
      return {...state, dataState:UsersStateEnum.ERROR, errorMessage:(<UsersActions>action).payload}
    case UsersActionsTypes.GET_USER_FOLLOWERS:
        return {...state, dataState:UsersStateEnum.LOADING, errorMessage:(<UsersActions>action).payload}
    case UsersActionsTypes.GET_USER_FOLLOWERS_SUCCESS:
        return {...state, dataState:UsersStateEnum.LOADED, errorMessage:(<UsersActions>action).payload}
    case UsersActionsTypes.GET_USER_FOLLOWERS:
        return {...state, dataState:UsersStateEnum.LOADING, errorMessage:(<UsersActions>action).payload}
    default : return {...state}
  }
}