import {Action} from '@ngrx/store';
import { User } from '../models/user.model';


export enum UsersActionsTypes {
    /* actions pour récupérer tous les utilisateur */
    GET_ALL_USERS = "[Users] Get All users",
    GET_ALL_USERS_SUCCESS = "[Users] Get All users Success",
    GET_ALL_USERS_FAILED = "[Users] Get All users failed",

    // action pour récupérer le profil d'un utilisateur par son id  
    GET_USER_BYLOGIN = "[Users] Get user by login",
    GET_USER_BYLOGIN_SUCCESS = "[Users] Get user by login success",
    GET_USER_BYLOGIN_FAILED = "[Users] Get user by login failed",

    // action pour récupérer les folowers d'un utilisateur
    GET_USER_FOLLOWERS = "[Users] Get user followers",
    GET_USER_FOLLOWERS_SUCCESS = "[Users] Get user followers success",
    GET_USER_FOLLOWERS_FAILED = "[Users] Get user followers failed",

}

// get all users action
export class GetAllUsersAction implements Action{
    type: UsersActionsTypes=UsersActionsTypes.GET_ALL_USERS;
    constructor(public payload?:any) {
    }
}

export class GetAllUsersActionSuccess implements Action{
    type: UsersActionsTypes=UsersActionsTypes.GET_ALL_USERS_SUCCESS;
    constructor(public payload:any) {
    }
}

export class GetAllUsersActionFailed implements Action{
    type: UsersActionsTypes=UsersActionsTypes.GET_ALL_USERS_FAILED;
    constructor(public payload:any) {
    }
}

// get user by login
export class GetUserByLoginAction implements Action{
    type: UsersActionsTypes=UsersActionsTypes.GET_USER_BYLOGIN;
    constructor(public payload:any) {
    }
}

export class GetUserByLoginActionSuccess implements Action{
    type: UsersActionsTypes=UsersActionsTypes.GET_USER_BYLOGIN_SUCCESS;
    constructor(public payload:any) {
    }
}

export class GetUserByLoginActionFailed implements Action{
    type: UsersActionsTypes=UsersActionsTypes.GET_USER_BYLOGIN_FAILED;
    constructor(public payload:any) {
    }
}


// get user followers
export class GetUserFollowersLoginAction implements Action{
    type: UsersActionsTypes=UsersActionsTypes.GET_USER_FOLLOWERS;
    constructor(public payload:any) {
    }
}

export class GetUserFollowersActionSuccess implements Action{
    type: UsersActionsTypes=UsersActionsTypes.GET_USER_FOLLOWERS_SUCCESS;
    constructor(public payload:any) {
    }
}

export class GetUserFollowersActionFailed implements Action{
    type: UsersActionsTypes=UsersActionsTypes.GET_USER_FOLLOWERS_FAILED;
    constructor(public payload:any) {
    }
}


export type UsersActions=
    GetAllUsersAction | GetAllUsersActionSuccess | GetAllUsersActionFailed
    | GetUserByLoginAction | GetUserByLoginActionSuccess | GetUserByLoginActionFailed  | GetUserFollowersLoginAction
    | GetUserFollowersActionSuccess | GetUserFollowersActionFailed 
;

