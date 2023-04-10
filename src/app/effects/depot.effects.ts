import {Injectable} from '@angular/core';
import {UsersService} from '../services/users.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
    GetUserDepotsLoginAction,GetUserDepotsActionFailed,
    GetUserDepotsActionSuccess,GetUserRepoActionSuccess,
    GetUserRepoActionFailed,GetUserRepoLoginAction,
    DepotsActions,
    DepotsActionsTypes
  } from '../actions/depot.actions';

  import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class UsersEffects {
  constructor(private userService:UsersService, private effectActions:Actions) {
  }

  getAllUsersEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(DepotsActionsTypes.GET_USER_DEPOTS),
      mergeMap((action)=>{
            return this.userService.getDepotsUserByLogin()
              .pipe(
                map((depots)=> new GetUserDepotsActionSuccess(depots)),
                catchError((err)=>of(new GetUserDepotsActionFailed(err.message)))
              )
      })
    )
  );

  /* Get Users by name*/
  getUserByLoginEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(DepotsActionsTypes.GET_USER_REPO_NAMEREPO),
      mergeMap((action)=>{
        console.log("action effects",action);
        return this.userService.getDepotByUserAndDepotName()
          .pipe(
            map((depots)=> new GetUserRepoActionSuccess(depots)),
            catchError((err)=>of(new GetUserRepoActionFailed(err.message)))
          )
      })
    )
  );

}