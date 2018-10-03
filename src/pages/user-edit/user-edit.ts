import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../../models/user/user'
import { UsersProvider } from '../../providers/users/users';
import { UserPage } from '../user/user'
/**
 * Generated class for the UserEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-edit',
  templateUrl: 'user-edit.html',
})
export class UserEditPage {

  user: FormGroup;
  theuser: User;

  constructor(
    private formBuilder: FormBuilder,
    private usersProvider: UsersProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.user = this.formBuilder.group({
        _id:[],
        username: ['', Validators.required],
        email: ['', Validators.required],
        first_name: [],
        last_name: []
      });
  }
  ionViewDidLoad() {
    this.getUser(this.navParams.data.id);
  }
  private getUser(id:string): void{

    this.usersProvider.getUser(id).subscribe(
      (response:any)=>{
       this.theuser = response.users;
       //console.log(this.theuser.username);
       //loader.dismiss();
      }
    );
  }
  editUser(): void{
    this.usersProvider.editUser(this.user.value).subscribe(
      (response:any)=>{
        //console.log(response)
        this.navCtrl.push(UserPage, {id: response.user._id});
        //console.log(this.theuser.username);

      }
    );
  }
}
