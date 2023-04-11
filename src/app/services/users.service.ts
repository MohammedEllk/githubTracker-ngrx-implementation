import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import { User, userDepot } from '../models/user.model';
import {Depot} from '../models/depot.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {}
  // pour récuperer toutes les utilisateurs
  public getUsers() : Observable<User[]> {
    return this.http.get<User[]>(environment.host+"/users");
  }

  // pour récupérer un utilisateur par nom d'utilisateur
  public getUserByLogin(login? : string) : Observable <User[]> {
    console.log("login",login)
    return this.http.get<User>(environment.host+"/users"+"/"+login).pipe(map(obj => [obj]));
  }

  // pour récupérer un les dépots d'un 'utilisateur
  public getDepotsUserByLogin(login? : string) : Observable <Depot[]> {
    return this.http.get<Depot[]>(environment.host+"/users"+"/"+login+"/repos");
  }

  // pour récupérer les followers d'un utilisateur 
  public getFollowersUserByLogin(login? : string) : Observable <User[]> {
    console.log("visited",environment.host+"/users"+"/"+login+"/followers");
    return this.http.get<User[]>(environment.host+"/users"+"/"+login+"/followers");
  }

  // pour récupérer le dépot d'un utilisateur par le nom du dépot
  public getDepotByUserAndDepotName(objNameDepot : userDepot) : Observable <Depot[]>  {
    return this.http.get<Depot>(environment.host+"/repos"+"/"+objNameDepot.login+"/"+objNameDepot.nameRepo).
      pipe(map(obj => [obj]));
  }
  

}
