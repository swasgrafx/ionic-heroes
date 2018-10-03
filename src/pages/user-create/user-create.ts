import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsersProvider } from '../../providers/users/users';
import { UserPage } from '../user/user'

/**
 * Generated class for the UserCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-create',
  templateUrl: 'user-create.html',
})
export class UserCreatePage {

  user: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersProvider: UsersProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.user = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        first_name: [],
        last_name: []
      });
  }

  createUser(): void{
    this.usersProvider.createUser(this.user.value).subscribe(
      (response:any)=>{
        //console.log(response.user._id)
        this.navCtrl.push(UserPage, {id: response.user._id});
      }
    );
  }
}
