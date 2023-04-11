import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetUserByLoginAction } from 'src/app/actions/user.actions';
import { UsersState, UsersStateEnum } from 'src/app/reducers/users.reducer';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userState$:Observable<UsersState>|null=null;
  login : string;
  readonly usersStateEnum= UsersStateEnum;
  constructor(private store:Store<any>,
    private route: ActivatedRoute,
    private router: Router) {
      this.userState$  = this.store.select('userState');
      this.login = this.route.snapshot.paramMap.get('login') || "";
     }

  ngOnInit(): void {
    this.store.dispatch(new GetUserByLoginAction(this.login));
  }
  // to go to components of followers of user
  navigateToFollowers(){
    this.router.navigate(['/followers-user',this.login]);
  }
  // to go to components of repos of user
  navigateToRepository(){
    this.router.navigate(['/repos-user',this.login]);
  }

}
