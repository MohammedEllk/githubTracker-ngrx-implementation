import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsersState, UsersStateEnum } from '../../reducers/users.reducer';
import { map } from 'rxjs/operators';
import { GetAllUsersAction } from '../../actions/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersState$:Observable<UsersState>|null=null;
  readonly usersStateEnum= UsersStateEnum;
  constructor(private store:Store<any>,private router : Router) { 
    this.usersState$  = this.store.select('userState');
  }

  ngOnInit(): void {
    
    
  console.log("this.usersState$",this.usersState$)
    /*this.usersState$=this.store.pipe(
      map((state)=>  state.catalogState)
    ).subscribe;
  }*/
  this.store.dispatch(new GetAllUsersAction("ok ok"));
  this.usersState$?.subscribe(obj => {
    console.log("obj",obj)
  })
}

viewProfile(name : string) {
  this.router.navigate(['/user-details',name]);
}

}
