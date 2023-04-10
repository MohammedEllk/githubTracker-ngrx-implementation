import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/users/details/user-details/user-details.component';
import { HomeComponent } from './components/home/home/home.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [  { path: '', component : HomeComponent},
{ path: 'users', component : UsersComponent},
{ path: 'user-details/:id', component: UserDetailsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
