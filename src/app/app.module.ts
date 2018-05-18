import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyCkp3I4qFWSzhhApXxMkVNSX_wjkmbaSQM",
    authDomain: "itma-1219.firebaseapp.com",
    databaseURL: "https://itma-1219.firebaseio.com",
    projectId: "itma-1219",
    storageBucket: "itma-1219.appspot.com",
    messagingSenderId: "617447887792"
};

@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})


export class AppModule {

}




