import {Injectable} from '@angular/core';
import {UsersService} from '../services/users.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  GetAllUsersActionFailed,
  GetAllUsersActionSuccess, GetUserByLoginActionFailed,
  GetUserByLoginActionSuccess,GetUserFollowersActionFailed,
  GetUserFollowersActionSuccess,
  UsersActions,
  UsersActionsTypes
} from '../actions/user.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class UsersEffects {
  constructor(private userService:UsersService, private effectActions:Actions) {
  }

  getAllUsersEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(UsersActionsTypes.GET_ALL_USERS),
      mergeMap((action)=>{
          //console.log("test ok tko ",action)
            return this.userService.getUsers()
              .pipe(
                map((users)=> new GetAllUsersActionSuccess(users)),
                catchError((err)=>of(new GetAllUsersActionFailed(err.message)))
              )
      })
    )
  );

  /* Get Users by name*/
  getUserByLoginEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(UsersActionsTypes.GET_USER_BYLOGIN),
      mergeMap((action)=>{
        console.log("action effects by",action);
        return this.userService.getUserByLogin(action)
          .pipe(
            map((users)=> new GetUserByLoginActionSuccess(users)),
            catchError((err)=>of(new GetUserByLoginActionFailed(err.message)))
          )
      })
    )
  );

    /* Get Followers by login*/
    getUserFollowersByLoginEffect:Observable<Action>=createEffect(
      ()=>this.effectActions.pipe(
        ofType(UsersActionsTypes.GET_USER_FOLLOWERS),
        mergeMap((action)=>{
          console.log("action effects followers",action);
          return this.userService.getFollowersUserByLogin(action)
            .pipe(
              map((users)=> new GetUserFollowersActionSuccess(users)),
              catchError((err)=>of(new GetUserFollowersActionFailed(err.message)))
            )
        })
      )
    );

}