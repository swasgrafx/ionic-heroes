import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../models/user/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

/*
  Generated class for the UsersProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  private url:string = 'http://localhost:3000/api/users';

  constructor(public http: HttpClient) {
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getUser(id:string): Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`);
  }

  createUser(user:User): Observable<User>{
    return this.http.post<User>(this.url, user, httpOptions);
  }

  editUser(user:User): Observable<User>{
    return this.http.put<User>(this.url, user, httpOptions);
  }

  deleteUser(id:string): Observable<User>{
//    console.log('delete user');
    return this.http.delete<User>(`${this.url}/${id}`);
}

}
