import {Depot} from '../models/depot.model';
import {DepotsActions, DepotsActionsTypes} from '../actions/depot.actions';
import {Action} from '@ngrx/store';

export enum DepotsStateEnum{
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial"
}
export interface DepotsState{
    DEPOTS:Depot[],
    errorMessage:string,
    dataState:DepotsStateEnum
}

const initState:DepotsState={
  DEPOTS:[],
  errorMessage:"",
  dataState:DepotsStateEnum.INITIAL
}



export function DepotsReducer(state=initState, action:Action):DepotsState {
  switch (action.type) {
    case DepotsActionsTypes.GET_USER_DEPOTS:
      return {...state, dataState:DepotsStateEnum.LOADING }
    case DepotsActionsTypes.GET_USER_DEPOTS_SUCCESS:
      return {...state, dataState:DepotsStateEnum.LOADED, DEPOTS:(<DepotsActions>action).payload}
    case DepotsActionsTypes.GET_USER_DEPOTS_FAILED:
      return {...state, dataState:DepotsStateEnum.ERROR, errorMessage:(<DepotsActions>action).payload}
    /* Get USER by Login*/
    case DepotsActionsTypes.GET_USER_REPO_NAMEREPO:
      return {...state, dataState:DepotsStateEnum.LOADING }
    case DepotsActionsTypes.GET_USER_REPO_NAMEREPO_SUCCESS:
      return {...state, dataState:DepotsStateEnum.LOADED, DEPOTS:(<DepotsActions>action).payload}
    case DepotsActionsTypes.GET_USER_REPO_NAMEREPO_FAILED:
      return {...state, dataState:DepotsStateEnum.ERROR, errorMessage:(<DepotsActions>action).payload}
    default : return {...state}
  }
}