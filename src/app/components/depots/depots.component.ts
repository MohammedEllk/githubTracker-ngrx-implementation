import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetUserDepotsLoginAction } from 'src/app/actions/depot.actions';
import { DepotsState, DepotsStateEnum } from 'src/app/reducers/depots.reducer';

@Component({
  selector: 'app-depots',
  templateUrl: './depots.component.html',
  styleUrls: ['./depots.component.scss']
})
export class DepotsComponent implements OnInit {
  depotsState$:Observable<DepotsState>| null = null;
  readonly depotsStateEnum= DepotsStateEnum;
  login : string  = "";
  constructor(private store:Store<any>,
    private route: ActivatedRoute,
    private router: Router) { 
      this.login = this.route.snapshot.paramMap.get('login') || "";
      this.depotsState$ = this.store.select("depotState");
    }

  ngOnInit(): void {
    this.store.dispatch(new GetUserDepotsLoginAction(this.login))
  }

  detailsDepot(name : string) {
    this.router.navigate(["repo-user-infos",this.login,name])
  }

}
