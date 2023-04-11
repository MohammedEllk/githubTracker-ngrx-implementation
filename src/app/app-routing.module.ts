import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/users/details/user-details/user-details.component';
import { HomeComponent } from './components/home/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { FollowersComponent } from './components/followers/followers.component';
import { DepotsComponent } from './components/depots/depots.component';
import { DepotDetailsComponent } from './components/depots/depot-details/depot-details.component';

const routes: Routes = [  { path: '', component : HomeComponent},
{ path: 'users', component : UsersComponent},
{ path: 'user-details/:login', component: UserDetailsComponent },
{ path: 'followers-user/:login', component: FollowersComponent },
{ path: 'repos-user/:login', component: DepotsComponent },
{ path: 'repo-user-infos/:login/:repositry', component: DepotDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
