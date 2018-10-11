import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ListsProvider } from '../../providers/lists/lists';
import { ListPage } from '../list/list'

/**
 * Generated class for the ListCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-create',
  templateUrl: 'list-create.html',
})
export class ListCreatePage {

  list: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private listsProvider: ListsProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.list = this.formBuilder.group({
        title: ['', Validators.required],
        note: [''],
      });
  }

  createList(): void{
    this.listsProvider.createList(this.list.value).subscribe(
      (response:any)=>{
        console.log(response);
        this.navCtrl.push(ListPage, {id: response.list.id});
      }
    );
  }
}
