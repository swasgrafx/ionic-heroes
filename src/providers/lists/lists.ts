import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

/*import { Component } from '@angular/core';

import {
  IonicPage,
  NavController,
  LoadingController,
  NavParams } from 'ionic-angular'; */

//import { ListsProvider } from '../../providers/lists/lists';
import { List } from '../../models/list/list'
//import { ListEditPage } from '../../models/list/list'
//import { ListPage } from '../list/list';
//import { ListCreatePage } from '../list-create/list-create';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

/*
  Generated class for the ListsProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListsProvider {

  private url:string = 'http://localhost:3000/api/lists';

  constructor(public http: HttpClient) {
  }

  getLists(): Observable<List[]>{
    return this.http.get<List[]>(this.url);
  }

  getList(slug:string): Observable<List>{
    return this.http.get<List>(`${this.url}/${slug}`);
  }

  createList(list:List): Observable<List>{
    return this.http.post<List>(this.url, list, httpOptions);
  }

  editList(list:List): Observable<List>{
    return this.http.put<List>(this.url, list, httpOptions);
  }

  deleteList(id:string): Observable<List>{
//    console.log('delete list');
    return this.http.delete<List>(`${this.url}/${id}`);
}

}
