import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
// import { auth } from 'firebase';
import User from "firebase"
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.user = user;
    //     localStorage.setItem('user', JSON.stringify(this.user));
    //   } else {
    //     localStorage.setItem('user', 'null');
    //   }
    // })
  }

  async login(email: string, password: string) {
    // var result = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
    // this.router.navigate(['home']);
  }

  async logout() {
    // await this.afAuth.auth.signOut();
    // localStorage.removeItem('user');
    // this.router.navigate(['admin/login']);
  }


}
