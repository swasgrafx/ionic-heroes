import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { List } from '../../models/list/list'
import { ListsProvider } from '../../providers/lists/lists';
import { ListPage } from '../list/list'
/**
 * Generated class for the ListEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-edit',
  templateUrl: 'list-edit.html',
})
export class ListEditPage {

  list: FormGroup;
  thelist: List;

  constructor(
    private formBuilder: FormBuilder,
    private listsProvider: ListsProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.list = this.formBuilder.group({
        _id:[],
        title: ['', Validators.required],
        note: ['', Validators.required]
      });
  }
  ionViewDidLoad() {
    this.getList(this.navParams.data.id);
  }
  private getList(id:string): void{

    this.listsProvider.getList(id).subscribe(
      (response:any)=>{
       this.thelist = response.lists;
       //console.log(this.thelist.listname);
       //loader.dismiss();
      }
    );
  }
  editList(): void{
    this.listsProvider.editList(this.list.value).subscribe(
      (response:any)=>{
        //console.log(response)
        this.navCtrl.push(ListPage, {id: response.list._id});
        //console.log(this.thelist.listname);

      }
    );
  }
}
