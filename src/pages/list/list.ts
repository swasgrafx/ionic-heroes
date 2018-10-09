import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  LoadingController,
  NavParams } from 'ionic-angular';

import { ListsProvider } from '../../providers/lists/lists';
import { List } from '../../models/list/list'
import { ListEditPage } from '../list-edit/list-edit';
import { ListCreatePage } from '../list-create/list-create';

/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'list.html',
})
export class ListPage {

  lists: List[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private listsProvider: ListsProvider,
    private loadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {
    this.getLists();
  }

  private getLists(): void{

    let loader = this.loadingCtrl.create({
      content: 'Loading...'
    });

    loader.present();

    this.listsProvider.getLists().subscribe(
      (response:any)=>{
        this.lists = response.lists;
//        console.log(this.lists);
        loader.dismiss();
      }
    );
  }
  toListEdit(id:string): void{
    this.navCtrl.push(ListEditPage, {id: id});
  }

  toListCreate(id:string): void{
    this.navCtrl.push(ListCreatePage);
  }

}
