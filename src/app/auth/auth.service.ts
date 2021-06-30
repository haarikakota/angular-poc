import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
// import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
// import { User } from 'firebase/app';
import "firebase/auth";

// import User auth from 'firebase/app';

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


}
