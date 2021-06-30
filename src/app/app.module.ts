import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const firebaseConfig = {
  apiKey: "AIzaSyD9lzeldRvzRWOyCxcvLQceiqUyNtmYgDw",
  authDomain: "angularpoc-4de2f.firebaseapp.com",
  projectId: "angularpoc-4de2f",
  storageBucket: "angularpoc-4de2f.appspot.com",
  messagingSenderId: "658990014196",
  appId: "1:658990014196:web:f1ac0df3e09656cfe448a1",
  measurementId: "G-04MWP12K2F"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
