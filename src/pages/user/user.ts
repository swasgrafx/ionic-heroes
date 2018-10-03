import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  LoadingController,
  NavParams } from 'ionic-angular';

import { UsersProvider } from '../../providers/users/users';
import { User } from '../../models/user/user';
import { UsersPage } from '../users/users';
import { UserEditPage } from '../user-edit/user-edit';
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user: User;

  constructor(
    private loadingCtrl: LoadingController,
    private usersProvider: UsersProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getUser(this.navParams.data.id);
  }
  private getUser(id:string): void{

    let loader = this.loadingCtrl.create({
      content: 'Loading...'
    });

    loader.present();

    this.usersProvider.getUser(id).subscribe(
      (response:any)=>{
        this.user = response.users;
//        console.log(response);
        loader.dismiss();
      }
    );
  }

    public userEdit(id): void{
      //console.log(id);
      this.navCtrl.push(UserEditPage, {id: id});
    }

    public deleteUser(id:string): void{
      if(confirm('Are you sure you want to delete '+this.user._id)){
        this.usersProvider.deleteUser(id).subscribe(
          (response:any)=>{
        this.navCtrl.push(UsersPage);
        //console.log('hello world');
          }
      );
    }
  }
}
