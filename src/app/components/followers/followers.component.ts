import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetUserFollowersLoginAction } from 'src/app/actions/user.actions';
import { UsersState, UsersStateEnum } from 'src/app/reducers/users.reducer';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followersState$ : Observable<UsersState>|null = null
  login : string;
  readonly usersStateEnum= UsersStateEnum;
  constructor(private store:Store<any>,
    private route: ActivatedRoute,
    private router: Router) {
      this.followersState$  = this.store.select('userState');
      this.login = this.route.snapshot.paramMap.get('login') || "";
     }

  ngOnInit(): void {
    this.store.dispatch(new GetUserFollowersLoginAction(this.login))
    this.followersState$?.subscribe(obj => {
      console.log("kliste fllowr",obj)
    })
  }
  viewProfile(name : string) {
    this.router.navigate(['/user-details',name]);
  }

}
