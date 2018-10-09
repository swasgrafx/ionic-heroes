import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListEditPage } from '../pages/list-edit/list-edit';
import { ListCreatePage } from '../pages/list-create/list-create';
import { UsersPage } from '../pages/users/users';
import { UserPage } from '../pages/user/user';
import { UserCreatePage } from '../pages/user-create/user-create';
import { UserEditPage } from '../pages/user-edit/user-edit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersProvider } from '../providers/users/users';
import { ListsProvider } from '../providers/lists/lists';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage,
    UserCreatePage,
    UserEditPage,
    ListPage,
    ListEditPage,
    ListCreatePage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage,
    UserCreatePage,
    UserEditPage,
    ListPage,
    ListEditPage,
    ListCreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    ListsProvider

  ]
})
export class AppModule {}
