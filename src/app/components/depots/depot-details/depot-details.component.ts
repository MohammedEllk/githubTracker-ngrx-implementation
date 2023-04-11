import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';
import { GetUserRepoLoginAction } from 'src/app/actions/depot.actions';
import { DepotsState, DepotsStateEnum } from 'src/app/reducers/depots.reducer';


@Component({
  selector: 'app-depot-details',
  templateUrl: './depot-details.component.html',
  styleUrls: ['./depot-details.component.scss']
})
export class DepotDetailsComponent implements OnInit {
  depotState$:Observable<DepotsState>| null = null;
  readonly depotsStateEnum= DepotsStateEnum;
  login : string  = "";
  nameRepo : string = "";


  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart : any;
  constructor(private store:Store<any>,
    private route : ActivatedRoute) { 
    this.login = this.route.snapshot.paramMap.get('login') || "";
    this.nameRepo = this.route.snapshot.paramMap.get('repositry') || "";
    this.depotState$ = this.store.select("depotState");
  }

  ngOnInit(): void {
    this.store.dispatch(new GetUserRepoLoginAction({login : this.login,nameRepo : this.nameRepo}))
  }

  ngAfterViewInit() {
    setTimeout(() => {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');
    // pour pourvoir faire le nombre de commit 
    this.mychart = new Chart(this.ctx, {
      type: "line",
      data: {
        labels: [
          "2010",
          "2011",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020"

        ],
        datasets: [
          {
            data: [2, 3, 5, 10, 20, 30, 50,8,35,40],
            lineTension: 0,
            backgroundColor: "transparent",
            borderColor: "#007bff",
            borderWidth: 4,
            pointBackgroundColor: "#007bff",
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
  })
    }, 2000);
    
  }
}
