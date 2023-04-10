import {Action} from '@ngrx/store';
import { User } from '../models/user.model';


export enum DepotsActionsTypes {
    // action pour récupérer les dépots d'un utilisateurs  
    GET_USER_DEPOTS = "[Users] Get user Depots",
    GET_USER_DEPOTS_SUCCESS = "[Users] Get user Depots success",
    GET_USER_DEPOTS_FAILED = "[Users] Get user Depots failed",


    // action pour récupérer le nom d'un repository d'un utilisateur
    GET_USER_REPO_NAMEREPO = "[Users] Get user repo by repo's name and user's name",
    GET_USER_REPO_NAMEREPO_SUCCESS = "[Users] Get user repo by repo's name and user's name",
    GET_USER_REPO_NAMEREPO_FAILED = "[Users] Get user repo by repo's name and user's name",

}





// get user depots
export class GetUserDepotsLoginAction implements Action{
    type: DepotsActionsTypes=DepotsActionsTypes.GET_USER_DEPOTS;
    constructor(public payload:any) {
    }
}

export class GetUserDepotsActionSuccess implements Action{
    type: DepotsActionsTypes=DepotsActionsTypes.GET_USER_DEPOTS_SUCCESS;
    constructor(public payload:any) {
    }
}

export class GetUserDepotsActionFailed implements Action{
    type: DepotsActionsTypes=DepotsActionsTypes.GET_USER_DEPOTS_FAILED;
    constructor(public payload:any) {
    }
}


// get repo of user by user's name and repo'name

export class GetUserRepoLoginAction implements Action{
    type: DepotsActionsTypes=DepotsActionsTypes.GET_USER_REPO_NAMEREPO;
    constructor(public payload:any) {
    }
}

export class GetUserRepoActionSuccess implements Action{
    type: DepotsActionsTypes=DepotsActionsTypes.GET_USER_REPO_NAMEREPO_SUCCESS;
    constructor(public payload:any) {
    }
}

export class GetUserRepoActionFailed implements Action{
    type: DepotsActionsTypes=DepotsActionsTypes.GET_USER_REPO_NAMEREPO_FAILED;
    constructor(public payload:any) {
    }
}

export type DepotsActions= GetUserDepotsLoginAction | GetUserDepotsActionSuccess | GetUserDepotsActionFailed |  GetUserRepoLoginAction
    | GetUserRepoActionSuccess | GetUserRepoActionFailed
;

