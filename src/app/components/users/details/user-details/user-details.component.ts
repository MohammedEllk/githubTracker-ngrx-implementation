import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsersState, UsersStateEnum } from 'src/app/reducers/users.reducer';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userState$:Observable<UsersState>|null=null;
  readonly usersStateEnum= UsersStateEnum;
  constructor(private store:Store<any>,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

}
